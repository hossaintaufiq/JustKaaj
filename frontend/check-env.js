const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

console.log('Frontend Environment Check:\n');

if (!fs.existsSync(envPath)) {
  console.log('❌ .env.local file NOT FOUND');
  console.log('Create frontend/.env.local with required variables');
  process.exit(1);
}

const content = fs.readFileSync(envPath, 'utf8');
const lines = content.split('\n').filter(l => l.trim() && !l.startsWith('#'));

const vars = {};
lines.forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && key.trim()) {
    vars[key.trim()] = valueParts.join('=').trim();
  }
});

const required = [
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
];

required.forEach(key => {
  const value = vars[key];
  if (!value) {
    console.log(`❌ ${key}: NOT SET`);
  } else {
    const display = key === 'NEXT_PUBLIC_API_URL' 
      ? (value.includes('localhost') ? `❌ ${value} (LOCALHOST - WRONG FOR PRODUCTION!)` : `✅ ${value}`)
      : `✅ ${key}: SET`;
    console.log(display);
  }
});

if (vars['NEXT_PUBLIC_API_URL'] && vars['NEXT_PUBLIC_API_URL'].includes('localhost')) {
  console.log('\n⚠️  WARNING: NEXT_PUBLIC_API_URL contains localhost!');
  console.log('   For production, use your actual backend domain.');
}

