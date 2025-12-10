import express, { Request, Response } from 'express';
import ProviderApplication, { IProviderApplication } from '../models/ProviderApplication';
import Provider from '../models/Provider';
import Notification from '../models/Notification';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

// Submit provider application
router.post('/applications', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;
    const userEmail = (req as any).user.email;
    const userName = (req as any).user.name;

    // Check if user already has a pending or approved application
    const existingApplication = await ProviderApplication.findOne({
      userId,
      status: { $in: ['pending', 'approved'] },
    }).sort({ submittedAt: -1 });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'You already have a pending or approved application',
        existingApplication: {
          id: existingApplication._id,
          status: existingApplication.status,
          submittedAt: existingApplication.submittedAt,
        },
      });
    }

    // Validate required fields
    const {
      businessName,
      serviceCategory,
      yearsOfExperience,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
      businessLicense,
      insuranceProvider,
      insurancePolicyNumber,
      portfolioWebsite,
      reference1Name,
      reference1Contact,
      reference2Name,
      reference2Contact,
      additionalInfo,
    } = req.body;

    if (
      !businessName ||
      !serviceCategory ||
      !yearsOfExperience ||
      !phoneNumber ||
      !address ||
      !city ||
      !state ||
      !zipCode ||
      !businessLicense ||
      !insuranceProvider ||
      !insurancePolicyNumber
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
      });
    }

    if (parseInt(yearsOfExperience) < 2) {
      return res.status(400).json({
        success: false,
        message: 'You must have at least 2 years of experience',
      });
    }

    // Create new provider application
    const application = new ProviderApplication({
      userId,
      userEmail,
      userName,
      businessName,
      serviceCategory,
      yearsOfExperience: parseInt(yearsOfExperience),
      phoneNumber,
      address,
      city,
      state,
      zipCode,
      businessLicense,
      insuranceProvider,
      insurancePolicyNumber,
      portfolioWebsite: portfolioWebsite || undefined,
      reference1Name: reference1Name || undefined,
      reference1Contact: reference1Contact || undefined,
      reference2Name: reference2Name || undefined,
      reference2Contact: reference2Contact || undefined,
      additionalInfo: additionalInfo || undefined,
      status: 'pending',
      submittedAt: new Date(),
    });

    await application.save();

    res.status(201).json({
      success: true,
      message: 'Provider application submitted successfully',
      application: {
        id: application._id,
        status: application.status,
        submittedAt: application.submittedAt,
      },
    });
  } catch (error: any) {
    console.error('Error submitting provider application:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'You already have a pending or approved application',
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to submit application. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Get user's application status
router.get('/applications/me', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    const application = await ProviderApplication.findOne({ userId });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'No application found',
      });
    }

    res.json({
      success: true,
      application,
    });
  } catch (error: any) {
    console.error('Error fetching application:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch application',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Get all providers (public, for service listing)
router.get('/list', async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    const query: any = { isActive: true };
    if (category) {
      query.serviceCategory = category;
    }

    const providers = await Provider.find(query)
      .sort({ approvedAt: -1 })
      .select('-__v -applicationId');

    res.json({
      success: true,
      providers,
    });
  } catch (error: any) {
    console.error('Error fetching providers:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch providers',
    });
  }
});

// Get providers by category
router.get('/list/:category', async (req: Request, res: Response) => {
  try {
    const { category } = req.params;

    const providers = await Provider.find({
      serviceCategory: category,
      isActive: true,
    })
      .sort({ approvedAt: -1 })
      .select('-__v -applicationId');

    res.json({
      success: true,
      providers,
    });
  } catch (error: any) {
    console.error('Error fetching providers by category:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch providers',
    });
  }
});

// Get user notifications
router.get('/notifications', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    const notifications = await Notification.find({ userId })
      .sort({ createdAt: -1 })
      .limit(50);

    const unreadCount = await Notification.countDocuments({ userId, isRead: false });

    res.json({
      success: true,
      notifications,
      unreadCount,
    });
  } catch (error: any) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch notifications',
    });
  }
});

// Mark notification as read
router.put('/notifications/:id/read', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;
    const { id } = req.params;

    const notification = await Notification.findOne({ _id: id, userId });

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: 'Notification not found',
      });
    }

    notification.isRead = true;
    await notification.save();

    res.json({
      success: true,
      notification,
    });
  } catch (error: any) {
    console.error('Error updating notification:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update notification',
    });
  }
});

// Mark all notifications as read
router.put('/notifications/read-all', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    await Notification.updateMany({ userId, isRead: false }, { isRead: true });

    res.json({
      success: true,
      message: 'All notifications marked as read',
    });
  } catch (error: any) {
    console.error('Error updating notifications:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update notifications',
    });
  }
});

export default router;
