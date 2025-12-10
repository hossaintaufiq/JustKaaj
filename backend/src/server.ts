// Load environment variables FIRST, before any other imports
import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import connectDB from './config/database';
import './config/firebase'; // Initialize Firebase Admin

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (for debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Origin:', req.headers.origin);
  next();
});

// CORS middleware - Allow all origins in development, specific origins in production
app.use((req, res, next) => {
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['*'];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes('*') || (origin && allowedOrigins.includes(origin))) {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Connect to MongoDB
connectDB().catch((error) => {
  // Error is already logged by event listener in database.ts
  // Don't exit in development, allow server to start and show error
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'JustKaaj API Server',
    status: 'running',
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
  });
});

// API Routes
import providerRoutes from './routes/providerRoutes';
import adminRoutes from './routes/adminRoutes';
import bookingRoutes from './routes/bookingRoutes';
app.use('/api/providers', providerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/bookings', bookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📋 Admin login endpoint: http://localhost:${PORT}/api/admin/login`);
  // console.log(`🔐 Admin credentials: justkaaj25@gmail.com / justkaaj@2025`);
});

