// Frontend Environment Variables Verification Script
// Note: This checks what should be in .env.local
// In Next.js, NEXT_PUBLIC_* variables are embedded at build time

console.log('🔍 Frontend Environment Variables Verification\n');
console.log('='.repeat(60));
console.log('⚠️  NOTE: Frontend env vars are embedded at BUILD TIME');
console.log('⚠️  Make sure to rebuild after changing .env.local');
console.log('='.repeat(60) + '\n');

const requiredVars = {
  NEXT_PUBLIC_API_URL: {
    required: true,
    description: 'Backend API URL (e.g., https://api.yourdomain.com)',
    check: (val) => val && (val.startsWith('http://') || val.startsWith('https://')),
    productionCheck: (val) => !val.includes('localhost'),
  },
  NEXT_PUBLIC_FIREBASE_API_KEY: {
    required: true,
    description: 'Firebase API Key',
    check: (val) => val && val.length > 10,
  },
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: {
    required: true,
    description: 'Firebase Auth Domain',
    check: (val) => val && val.includes('.firebaseapp.com'),
  },
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: {
    required: true,
    description: 'Firebase Project ID',
    check: (val) => val && val.length > 0,
  },
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: {
    required: true,
    description: 'Firebase Storage Bucket',
    check: (val) => val && val.length > 0,
  },
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: {
    required: true,
    description: 'Firebase Messaging Sender ID',
    check: (val) => val && val.length > 0,
  },
  NEXT_PUBLIC_FIREBASE_APP_ID: {
    required: true,
    description: 'Firebase App ID',
    check: (val) => val && val.length > 0,
  },
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: {
    required: false,
    description: 'Firebase Analytics Measurement ID',
    check: (val) => !val || val.startsWith('G-'),
  },
};

console.log('Expected Environment Variables in frontend/.env.local:\n');

let hasErrors = false;
let hasWarnings = false;

for (const [varName, config] of Object.entries(requiredVars)) {
  if (config.required) {
    console.log(`✅ ${varName}`);
    console.log(`   ${config.description}`);
    
    if (config.productionCheck) {
      console.log(`   ⚠️  PRODUCTION: Should NOT contain 'localhost'`);
    }
  } else {
    console.log(`⚠️  ${varName} (optional)`);
    console.log(`   ${config.description}`);
  }
  console.log('');
}

console.log('='.repeat(60));
console.log('\n📝 Instructions:');
console.log('1. Create/update frontend/.env.local with the variables above');
console.log('2. Set NEXT_PUBLIC_API_URL to your production backend URL');
console.log('3. Rebuild frontend: cd frontend && npm run build');
console.log('4. Verify API_URL is correct in the build output\n');

console.log('🔗 To verify in browser console:');
console.log('   console.log(process.env.NEXT_PUBLIC_API_URL)');
console.log('   (This will show the value embedded at build time)\n');

