import express, { Request, Response } from 'express';
import Booking, { IBooking } from '../models/Booking';
import Provider from '../models/Provider';
import Notification from '../models/Notification';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

// Create a new booking
router.post('/', verifyToken, async (req: Request, res: Response) => {
  try {
    console.log('Booking creation request received');
    const userId = (req as any).user.uid;
    const userEmail = (req as any).user.email;
    // Get userName from Firebase user's displayName or use email prefix as fallback
    const userName = (req as any).user.name || userEmail?.split('@')[0] || 'User';
    
    console.log('User info:', { userId, userEmail, userName, fullUser: (req as any).user });

    // Check if user is a provider (providers cannot book services)
    const provider = await Provider.findOne({ userId, isActive: true });
    if (provider) {
      console.log('Provider attempting to book - blocked');
      return res.status(403).json({
        success: false,
        message: 'Providers cannot book services. Please use a customer account.',
      });
    }

    const {
      providerId,
      serviceCategory,
      serviceDescription,
      bookingDate,
      timeSlot,
      notes,
      estimatedPrice,
    } = req.body;

    console.log('Booking data received:', {
      providerId,
      serviceCategory,
      bookingDate,
      timeSlot,
      hasNotes: !!notes,
      estimatedPrice,
    });

    // Validate required fields
    if (!providerId || !serviceCategory || !bookingDate || !timeSlot) {
      console.log('Validation failed - missing required fields');
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: providerId, serviceCategory, bookingDate, and timeSlot are required',
        received: { providerId, serviceCategory, bookingDate, timeSlot },
      });
    }

    // Get provider details
    const serviceProvider = await Provider.findOne({
      userId: providerId,
      isActive: true,
    });

    if (!serviceProvider) {
      console.log('Provider not found:', providerId);
      return res.status(404).json({
        success: false,
        message: 'Provider not found or not active',
      });
    }

    console.log('Provider found:', serviceProvider.businessName);
    console.log('Provider details:', {
      userId: serviceProvider.userId,
      userEmail: serviceProvider.userEmail,
      businessName: serviceProvider.businessName,
    });

    // Validate provider has required fields
    if (!serviceProvider.userEmail) {
      console.error('Provider missing userEmail:', serviceProvider);
      return res.status(500).json({
        success: false,
        message: 'Provider data is incomplete. Missing userEmail.',
        error: 'Provider userEmail is required but not found',
      });
    }

    if (!serviceProvider.userId) {
      console.error('Provider missing userId:', serviceProvider);
      return res.status(500).json({
        success: false,
        message: 'Provider data is incomplete. Missing userId.',
        error: 'Provider userId is required but not found',
      });
    }

    // Create booking
    const bookingData = {
      userId,
      userEmail: userEmail || '',
      userName: userName || undefined, // Only include if not empty
      providerId: serviceProvider.userId,
      providerEmail: serviceProvider.userEmail || '',
      providerName: serviceProvider.businessName || 'Unknown Provider',
      serviceCategory,
      serviceDescription: serviceDescription || undefined,
      bookingDate: new Date(bookingDate),
      timeSlot,
      notes: notes || undefined,
      estimatedPrice: estimatedPrice || undefined,
      status: 'pending' as const,
    };

    // Validate booking data before creating
    if (!bookingData.userEmail || !bookingData.providerEmail) {
      console.error('Missing required email fields:', bookingData);
      return res.status(400).json({
        success: false,
        message: 'Missing required email information',
        error: 'Both userEmail and providerEmail are required',
      });
    }

    // Generate unique booking ID
    const generateBookingId = () => {
      const timestamp = Date.now().toString(36);
      const random = Math.random().toString(36).substring(2, 8);
      return `BK${timestamp}${random}`.toUpperCase();
    };
    
    const bookingId = generateBookingId();

    console.log('Creating booking with data:', {
      ...bookingData,
      bookingDate: bookingData.bookingDate.toISOString(),
      bookingId,
    });

    try {
      const booking = new Booking({
        ...bookingData,
        bookingId, // Include the generated bookingId
      });
      await booking.save();
      console.log('Booking saved successfully:', booking.bookingId);

      // Create notification for provider
      try {
        const providerNotification = new Notification({
          userId: serviceProvider.userId,
          type: 'booking_request',
          title: 'New Booking Request',
          message: `${userName || userEmail} has requested a booking for ${serviceCategory} on ${new Date(bookingDate).toLocaleDateString()} at ${timeSlot}`,
          bookingId: booking.bookingId,
          metadata: {
            bookingId: booking.bookingId,
            customerName: userName || userEmail,
            customerEmail: userEmail,
            serviceCategory,
            bookingDate: booking.bookingDate.toISOString(),
            timeSlot,
          },
          isRead: false,
        });
        await providerNotification.save();
        console.log('Provider notification created');
      } catch (notifError: any) {
        console.error('Error creating provider notification:', notifError);
        // Continue even if notification fails
      }

      // Create confirmation notification for user
      try {
        const userNotification = new Notification({
          userId,
          type: 'booking_confirmation',
          title: 'Booking Request Submitted',
          message: `Your booking request for ${serviceProvider.businessName} has been submitted and is pending approval.`,
          bookingId: booking.bookingId || bookingId,
          isRead: false,
        });
        await userNotification.save();
        console.log('User notification created');
      } catch (notifError: any) {
        console.error('Error creating user notification:', notifError);
        // Continue even if notification fails
      }

      res.status(201).json({
        success: true,
        message: 'Booking created successfully',
        booking,
      });
    } catch (saveError: any) {
      console.error('Error saving booking:', saveError);
      console.error('Save error details:', {
        message: saveError.message,
        name: saveError.name,
        code: saveError.code,
        errors: saveError.errors,
      });
      
      // Check for validation errors
      if (saveError.name === 'ValidationError') {
        const validationErrors = Object.keys(saveError.errors || {}).map(key => ({
          field: key,
          message: saveError.errors[key].message,
        }));
        
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          error: saveError.message,
          validationErrors,
        });
      }
      
      // Re-throw to be caught by outer catch
      throw saveError;
    }
  } catch (error: any) {
    console.error('Error creating booking:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code,
      errors: error.errors,
    });
    
    // Always include error details in development
    const isDevelopment = process.env.NODE_ENV !== 'production';
    
    res.status(500).json({
      success: false,
      message: 'Failed to create booking',
      error: error.message || 'Unknown error',
      details: isDevelopment ? {
        message: error.message,
        name: error.name,
        code: error.code,
        stack: error.stack?.split('\n').slice(0, 5), // First 5 lines of stack
        errors: error.errors,
      } : undefined,
    });
  }
});

// Get user's bookings
router.get('/my-bookings', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    const bookings = await Booking.find({ userId })
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      bookings,
    });
  } catch (error: any) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
    });
  }
});

// Get provider's bookings
router.get('/provider/bookings', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    // Verify user is a provider
    const provider = await Provider.findOne({ userId, isActive: true });
    if (!provider) {
      return res.status(403).json({
        success: false,
        message: 'Only active providers can access this endpoint',
      });
    }

    const { status } = req.query;
    const query: any = { providerId: userId };
    if (status) {
      query.status = status;
    }

    const bookings = await Booking.find(query)
      .sort({ createdAt: -1 })
      .limit(100);

    res.json({
      success: true,
      bookings,
    });
  } catch (error: any) {
    console.error('Error fetching provider bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
    });
  }
});

// Accept booking (provider only)
router.put('/:bookingId/accept', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;
    const { bookingId } = req.params;

    // Verify user is a provider
    const provider = await Provider.findOne({ userId, isActive: true });
    if (!provider) {
      return res.status(403).json({
        success: false,
        message: 'Only active providers can accept bookings',
      });
    }

    const booking = await Booking.findOne({
      bookingId,
      providerId: userId,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    if (booking.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: `Booking is already ${booking.status}`,
      });
    }

    booking.status = 'accepted';
    booking.acceptedAt = new Date();
    await booking.save();

    // Create notification for user
    const userNotification = new Notification({
      userId: booking.userId,
      type: 'booking_accepted',
      title: 'Booking Accepted!',
      message: `${provider.businessName} has accepted your booking request for ${booking.serviceCategory}.`,
      bookingId: booking.bookingId,
      isRead: false,
    });
    await userNotification.save();

    res.json({
      success: true,
      message: 'Booking accepted successfully',
      booking,
    });
  } catch (error: any) {
    console.error('Error accepting booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to accept booking',
    });
  }
});

// Reject booking (provider only)
router.put('/:bookingId/reject', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;
    const { bookingId } = req.params;
    const { rejectionReason } = req.body;

    // Verify user is a provider
    const provider = await Provider.findOne({ userId, isActive: true });
    if (!provider) {
      return res.status(403).json({
        success: false,
        message: 'Only active providers can reject bookings',
      });
    }

    const booking = await Booking.findOne({
      bookingId,
      providerId: userId,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    if (booking.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: `Booking is already ${booking.status}`,
      });
    }

    booking.status = 'rejected';
    booking.rejectedAt = new Date();
    booking.rejectionReason = rejectionReason || 'No reason provided';
    await booking.save();

    // Create notification for user
    const userNotification = new Notification({
      userId: booking.userId,
      type: 'booking_rejected',
      title: 'Booking Request Rejected',
      message: `${provider.businessName} has rejected your booking request. ${rejectionReason ? `Reason: ${rejectionReason}` : ''}`,
      bookingId: booking.bookingId,
      isRead: false,
    });
    await userNotification.save();

    res.json({
      success: true,
      message: 'Booking rejected',
      booking,
    });
  } catch (error: any) {
    console.error('Error rejecting booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reject booking',
    });
  }
});

// Get single booking details
router.get('/:bookingId', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;
    const { bookingId } = req.params;

    const booking = await Booking.findOne({ bookingId });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    // Verify user has access to this booking (either customer or provider)
    if (booking.userId !== userId && booking.providerId !== userId) {
      return res.status(403).json({
        success: false,
        message: 'Access denied',
      });
    }

    res.json({
      success: true,
      booking,
    });
  } catch (error: any) {
    console.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking',
    });
  }
});

export default router;
