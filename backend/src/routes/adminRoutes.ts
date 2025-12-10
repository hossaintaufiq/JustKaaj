import express, { Request, Response } from 'express';
import ProviderApplication from '../models/ProviderApplication';
import Provider from '../models/Provider';
import Notification from '../models/Notification';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Hardcoded admin credentials
const ADMIN_EMAIL = 'justkaaj25@gmail.com';
const ADMIN_PASSWORD = 'justkaaj@2025';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Admin login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log('Admin login attempt:', { email, receivedPassword: password ? '***' : 'empty' });

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      });
    }

    // Trim whitespace from email
    const trimmedEmail = email.trim().toLowerCase();
    const expectedEmail = ADMIN_EMAIL.toLowerCase();

    console.log('Comparing emails:', { trimmedEmail, expectedEmail, match: trimmedEmail === expectedEmail });
    console.log('Comparing passwords:', { received: password, expected: ADMIN_PASSWORD, match: password === ADMIN_PASSWORD });

    // Check credentials (case-insensitive email comparison)
    if (trimmedEmail === expectedEmail && password === ADMIN_PASSWORD) {
      // Create JWT token
      const token = jwt.sign(
        { email: ADMIN_EMAIL, role: 'super_admin' },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      console.log('Admin login successful');

      res.json({
        success: true,
        message: 'Login successful',
        token,
        admin: {
          email: ADMIN_EMAIL,
          role: 'super_admin',
        },
      });
    } else {
      console.log('Admin login failed - invalid credentials');
      res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }
  } catch (error: any) {
    console.error('Admin login error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Middleware to verify admin token
export const verifyAdminToken = (req: Request, res: Response, next: any) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
      });
    }

    const token = authHeader.split('Bearer ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as any;

    if (decoded.email !== ADMIN_EMAIL || decoded.role !== 'super_admin') {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    (req as any).admin = decoded;
    next();
  } catch (error: any) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};

// Get all provider applications
router.get('/applications', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const query: any = {};
    if (status) {
      query.status = status;
    }

    const applications = await ProviderApplication.find(query)
      .sort({ submittedAt: -1 })
      .select('-__v');

    res.json({
      success: true,
      applications,
    });
  } catch (error: any) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications',
    });
  }
});

// Get single application details
router.get('/applications/:id', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const application = await ProviderApplication.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
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
    });
  }
});

// Approve application
router.post('/applications/:id/approve', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const adminEmail = (req as any).admin.email;

    const application = await ProviderApplication.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    if (application.status === 'approved') {
      return res.status(400).json({
        success: false,
        message: 'Application already approved',
      });
    }

    // Update application status
    application.status = 'approved';
    application.reviewedAt = new Date();
    await application.save();

    // Create provider entry
    const provider = new Provider({
      userId: application.userId,
      userEmail: application.userEmail,
      userName: application.userName,
      businessName: application.businessName,
      serviceCategory: application.serviceCategory,
      yearsOfExperience: application.yearsOfExperience,
      phoneNumber: application.phoneNumber,
      address: application.address,
      city: application.city,
      state: application.state,
      zipCode: application.zipCode,
      businessLicense: application.businessLicense,
      insuranceProvider: application.insuranceProvider,
      insurancePolicyNumber: application.insurancePolicyNumber,
      portfolioWebsite: application.portfolioWebsite,
      applicationId: application._id,
      isActive: true,
      approvedAt: new Date(),
      approvedBy: adminEmail,
    });

    await provider.save();

    // Create notification for applicant
    const notification = new Notification({
      userId: application.userId,
      type: 'application_approved',
      title: 'Application Approved!',
      message: `Congratulations! Your provider application for ${application.businessName} has been approved. You can now start receiving bookings.`,
      applicationId: application._id,
      isRead: false,
    });

    await notification.save();

    res.json({
      success: true,
      message: 'Application approved successfully',
      application,
      provider: {
        id: provider._id,
        businessName: provider.businessName,
      },
    });
  } catch (error: any) {
    console.error('Error approving application:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to approve application',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Reject application
router.post('/applications/:id/reject', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const application = await ProviderApplication.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    if (application.status === 'rejected') {
      return res.status(400).json({
        success: false,
        message: 'Application already rejected',
      });
    }

    // Update application status
    application.status = 'rejected';
    application.reviewedAt = new Date();
    await application.save();

    // Create notification for applicant
    const notification = new Notification({
      userId: application.userId,
      type: 'application_rejected',
      title: 'Application Status Update',
      message: `We're sorry, but your provider application for ${application.businessName} has been rejected. Please contact support for more information.`,
      applicationId: application._id,
      isRead: false,
    });

    await notification.save();

    res.json({
      success: true,
      message: 'Application rejected successfully',
      application,
    });
  } catch (error: any) {
    console.error('Error rejecting application:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to reject application',
    });
  }
});

// Put application on hold
router.post('/applications/:id/on-hold', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const application = await ProviderApplication.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    if (application.status === 'on_hold') {
      return res.status(400).json({
        success: false,
        message: 'Application already on hold',
      });
    }

    // Update application status
    application.status = 'on_hold';
    application.reviewedAt = new Date();
    await application.save();

    // Create notification for applicant
    const notification = new Notification({
      userId: application.userId,
      type: 'application_on_hold',
      title: 'Application On Hold',
      message: `Your provider application for ${application.businessName} has been put on hold. Our team will review it further and get back to you soon.`,
      applicationId: application._id,
      isRead: false,
    });

    await notification.save();

    res.json({
      success: true,
      message: 'Application put on hold successfully',
      application,
    });
  } catch (error: any) {
    console.error('Error putting application on hold:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to put application on hold',
    });
  }
});

export default router;

