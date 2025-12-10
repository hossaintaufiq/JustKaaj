// Environment Variable Verification Script
require('dotenv').config();

console.log('🔍 Backend Environment Variables Verification\n');
console.log('='.repeat(60));

const requiredVars = {
  MONGODB_URI: {
    required: true,
    description: 'MongoDB connection string',
    check: (val) => val && val.startsWith('mongodb'),
  },
  FIREBASE_SERVICE_ACCOUNT_KEY: {
    required: true,
    description: 'Firebase Service Account JSON',
    check: (val) => {
      if (!val) return false;
      try {
        const cleaned = val.trim().replace(/^["']|["']$/g, '');
        const parsed = JSON.parse(cleaned);
        return parsed.project_id && parsed.private_key && parsed.client_email;
      } catch {
        return false;
      }
    },
  },
  JWT_SECRET: {
    required: true,
    description: 'JWT secret for admin authentication',
    check: (val) => val && val.length >= 10,
  },
  PORT: {
    required: false,
    description: 'Server port (defaults to 5000)',
    check: (val) => !val || (!isNaN(parseInt(val))),
  },
  NODE_ENV: {
    required: false,
    description: 'Node environment (production/development)',
    check: (val) => !val || ['production', 'development'].includes(val),
  },
  ALLOWED_ORIGINS: {
    required: false,
    description: 'Comma-separated list of allowed CORS origins',
    check: (val) => !val || (val.includes('http://') || val.includes('https://') || val === '*'),
  },
};

let hasErrors = false;

for (const [varName, config] of Object.entries(requiredVars)) {
  const value = process.env[varName];
  const isSet = value !== undefined && value !== '';
  const isValid = isSet && (config.check ? config.check(value) : true);
  
  if (config.required && !isSet) {
    console.log(`❌ ${varName}: MISSING (REQUIRED)`);
    console.log(`   ${config.description}`);
    hasErrors = true;
  } else if (config.required && !isValid) {
    console.log(`❌ ${varName}: INVALID FORMAT`);
    console.log(`   ${config.description}`);
    hasErrors = true;
  } else if (!isSet && config.required === false) {
    console.log(`⚠️  ${varName}: NOT SET (optional - using default)`);
    console.log(`   ${config.description}`);
  } else {
    const displayValue = varName === 'FIREBASE_SERVICE_ACCOUNT_KEY' || varName === 'MONGODB_URI' || varName === 'JWT_SECRET'
      ? (value ? `${value.substring(0, 20)}...` : 'NOT SET')
      : value;
    console.log(`✅ ${varName}: ${displayValue}`);
  }
}

console.log('\n' + '='.repeat(60));
if (hasErrors) {
  console.log('\n❌ Some required environment variables are missing or invalid!');
  process.exit(1);
} else {
  console.log('\n✅ All required environment variables are set correctly!');
}

