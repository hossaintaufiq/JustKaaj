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

// Check if user is a provider
router.get('/check', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    const provider = await Provider.findOne({ userId, isActive: true });

    res.json({
      success: true,
      isProvider: !!provider,
      provider: provider || null,
    });
  } catch (error: any) {
    console.error('Error checking provider status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to check provider status',
    });
  }
});

// Get provider dashboard data
router.get('/dashboard', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    const provider = await Provider.findOne({ userId, isActive: true });

    if (!provider) {
      return res.status(403).json({
        success: false,
        message: 'You are not an approved provider',
      });
    }

    res.json({
      success: true,
      provider,
    });
  } catch (error: any) {
    console.error('Error fetching provider dashboard:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data',
    });
  }
});

// Update provider profile
router.put('/dashboard', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.uid;

    const provider = await Provider.findOne({ userId, isActive: true });

    if (!provider) {
      return res.status(403).json({
        success: false,
        message: 'You are not an approved provider',
      });
    }

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
      businessDescription,
      hourlyRate,
      availability,
      serviceAreas,
      certifications,
      specialties,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      twitterUrl,
    } = req.body;

    // Update provider fields
    if (businessName) provider.businessName = businessName;
    if (serviceCategory) provider.serviceCategory = serviceCategory;
    if (yearsOfExperience !== undefined) provider.yearsOfExperience = parseInt(yearsOfExperience);
    if (phoneNumber) provider.phoneNumber = phoneNumber;
    if (address) provider.address = address;
    if (city) provider.city = city;
    if (state) provider.state = state;
    if (zipCode) provider.zipCode = zipCode;
    if (businessLicense) provider.businessLicense = businessLicense;
    if (insuranceProvider) provider.insuranceProvider = insuranceProvider;
    if (insurancePolicyNumber) provider.insurancePolicyNumber = insurancePolicyNumber;
    if (portfolioWebsite !== undefined) provider.portfolioWebsite = portfolioWebsite || undefined;
    if (businessDescription !== undefined) provider.businessDescription = businessDescription || undefined;
    if (hourlyRate !== undefined) provider.hourlyRate = hourlyRate ? parseFloat(hourlyRate) : undefined;
    if (availability !== undefined) provider.availability = availability || undefined;
    if (serviceAreas !== undefined) {
      provider.serviceAreas = Array.isArray(serviceAreas) 
        ? serviceAreas 
        : serviceAreas.split(',').map((area: string) => area.trim()).filter(Boolean);
    }
    if (certifications !== undefined) {
      provider.certifications = Array.isArray(certifications)
        ? certifications
        : certifications.split(',').map((cert: string) => cert.trim()).filter(Boolean);
    }
    if (specialties !== undefined) {
      provider.specialties = Array.isArray(specialties)
        ? specialties
        : specialties.split(',').map((spec: string) => spec.trim()).filter(Boolean);
    }
    if (facebookUrl !== undefined) provider.facebookUrl = facebookUrl || undefined;
    if (instagramUrl !== undefined) provider.instagramUrl = instagramUrl || undefined;
    if (linkedinUrl !== undefined) provider.linkedinUrl = linkedinUrl || undefined;
    if (twitterUrl !== undefined) provider.twitterUrl = twitterUrl || undefined;

    await provider.save();

    res.json({
      success: true,
      message: 'Profile updated successfully',
      provider,
    });
  } catch (error: any) {
    console.error('Error updating provider profile:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
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
    console.log('GET /api/providers/list - Request received');
    console.log('Request origin:', req.headers.origin);
    console.log('Request headers:', req.headers);
    
    const { category } = req.query;

    const query: any = { isActive: true };
    if (category) {
      query.serviceCategory = category;
    }

    const providers = await Provider.find(query)
      .sort({ approvedAt: -1 })
      .select('-__v -applicationId');

    console.log(`Found ${providers.length} active providers`);

    res.json({
      success: true,
      providers,
    });
  } catch (error: any) {
    console.error('Error fetching providers:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch providers',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Get providers by category
router.get('/list/:category', async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    console.log(`GET /api/providers/list/${category} - Request received`);

    const providers = await Provider.find({
      serviceCategory: category,
      isActive: true,
    })
      .sort({ approvedAt: -1 })
      .select('-__v -applicationId');

    console.log(`Found ${providers.length} providers for category: ${category}`);

    res.json({
      success: true,
      providers,
    });
  } catch (error: any) {
    console.error('Error fetching providers by category:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch providers',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
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
