import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebase';

interface AuthenticatedRequest extends Request {
  user?: {
    uid: string;
    email: string;
    name?: string;
  };
}

export const verifyToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
      });
    }

    const token = authHeader.split('Bearer ')[1];

    // Verify the Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Get user record to access displayName
    let displayName: string | undefined;
    try {
      const userRecord = await admin.auth().getUser(decodedToken.uid);
      displayName = userRecord.displayName;
    } catch (userError) {
      // If we can't get user record, continue without displayName
      console.warn('Could not fetch user record for displayName:', userError);
    }

    // Attach user info to request
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email || '',
      name: displayName || decodedToken.name || undefined,
    };

    next();
  } catch (error: any) {
    console.error('Error verifying token:', error);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};

