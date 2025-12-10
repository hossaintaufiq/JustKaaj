require('dotenv').config();

console.log('Backend Environment Check:\n');
console.log('PORT:', process.env.PORT || 'NOT SET (defaults to 5000)');
console.log('NODE_ENV:', process.env.NODE_ENV || 'NOT SET');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'SET ✓' : 'NOT SET ✗');
console.log('FIREBASE_SERVICE_ACCOUNT_KEY:', process.env.FIREBASE_SERVICE_ACCOUNT_KEY ? 'SET ✓' : 'NOT SET ✗');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'SET ✓' : 'NOT SET ✗ (REQUIRED)');
console.log('ALLOWED_ORIGINS:', process.env.ALLOWED_ORIGINS || 'NOT SET (defaults to *)');

