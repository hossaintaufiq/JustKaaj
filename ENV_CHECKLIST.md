# Environment Variables Checklist

## ✅ Backend Environment Variables (backend/.env)

Create a `.env` file in the `backend/` directory with the following:

```bash
# Server Configuration
PORT=5000
NODE_ENV=production

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/justkaaj?retryWrites=true&w=majority
# OR for local: mongodb://localhost:27017/justkaaj
# ⚠️ Make sure password is URL-encoded (e.g., @ becomes %40)

# Firebase Admin SDK
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"justkaaj-745c5","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
# ⚠️ Must be the complete JSON object, all on one line or properly escaped

# JWT Secret for Admin Authentication
JWT_SECRET=your-very-secure-random-string-at-least-32-characters-long

# CORS Configuration (Optional - defaults to allow all)
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
# If not set, will allow all origins (*)
```

### Verification:
Run: `cd backend && node verify-env.js`

---

## ✅ Frontend Environment Variables (frontend/.env.local)

Create a `.env.local` file in the `frontend/` directory with the following:

```bash
# Backend API URL - ⚠️ CRITICAL FOR PRODUCTION
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
# Examples:
# - https://api.yourdomain.com
# - https://backend.yourdomain.com
# - https://yourdomain.com:5000 (if using custom port)
# ⚠️ DO NOT use http://localhost:5000 in production!

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCQCKIBq92R7-mDEXnN3sqNCAqdJ97cAVU
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=justkaaj-745c5.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=justkaaj-745c5
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=justkaaj-745c5.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=502314644754
NEXT_PUBLIC_FIREBASE_APP_ID=1:502314644754:web:b4916e5277d5b00972afcb
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-CBSHJNLSLF
```

### ⚠️ IMPORTANT NOTES:
1. **NEXT_PUBLIC_API_URL** is the most critical variable for production
2. Frontend environment variables starting with `NEXT_PUBLIC_` are embedded at BUILD TIME
3. You MUST rebuild the frontend after changing `.env.local`: `npm run build`
4. The API URL should match your actual backend deployment URL
5. In production, it should NOT contain `localhost`

### Verification:
Run: `cd frontend && node verify-env.js`

---

## 🔍 Quick Verification Commands

### Check if backend env vars are loaded:
```bash
cd backend
node -e "require('dotenv').config(); console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'SET' : 'NOT SET'); console.log('FIREBASE:', process.env.FIREBASE_SERVICE_ACCOUNT_KEY ? 'SET' : 'NOT SET');"
```

### Check if frontend API URL is correct:
After building, check the browser console on your production site:
```javascript
// In browser console
console.log('API URL:', process.env.NEXT_PUBLIC_API_URL)
```

### Test backend API directly:
```bash
curl https://your-backend-domain.com/api/providers/list
# Should return JSON with providers array
```

---

## 🐛 Common Issues

### Issue: "Failed to load services" in production

**Symptom**: Frontend shows "Failed to load" error, but works in dev

**Causes**:
1. ❌ `NEXT_PUBLIC_API_URL` not set or points to localhost
2. ❌ Frontend not rebuilt after setting env vars
3. ❌ Backend CORS not allowing frontend domain
4. ❌ Backend not accessible from internet

**Fix**:
1. Set `NEXT_PUBLIC_API_URL=https://your-backend-domain.com` in `.env.local`
2. Rebuild: `cd frontend && npm run build`
3. Check backend logs for incoming requests
4. Verify CORS allows your frontend domain

### Issue: MongoDB connection fails

**Causes**:
1. ❌ Password not URL-encoded in MONGODB_URI
2. ❌ IP not whitelisted in MongoDB Atlas
3. ❌ Incorrect connection string format

**Fix**:
1. URL-encode special characters: `@` → `%40`, `:` → `%3A`, etc.
2. Whitelist your server IP in MongoDB Atlas Network Access
3. Verify connection string format

### Issue: Firebase Admin not initializing

**Causes**:
1. ❌ `FIREBASE_SERVICE_ACCOUNT_KEY` is not complete JSON
2. ❌ JSON is not properly formatted/escaped

**Fix**:
1. Get complete JSON from Firebase Console > Service Accounts
2. Ensure entire JSON is on one line or properly escaped
3. Remove surrounding quotes if present

---

## 📋 Deployment Checklist

Before deploying to production:

### Backend:
- [ ] All environment variables set in `.env`
- [ ] `MONGODB_URI` has URL-encoded password
- [ ] `FIREBASE_SERVICE_ACCOUNT_KEY` is complete JSON
- [ ] `JWT_SECRET` is a secure random string
- [ ] `ALLOWED_ORIGINS` includes your frontend domain(s)
- [ ] Backend is accessible from internet
- [ ] MongoDB IP whitelist includes server IP

### Frontend:
- [ ] `NEXT_PUBLIC_API_URL` points to production backend (NOT localhost)
- [ ] All Firebase config variables are set
- [ ] Frontend rebuilt: `npm run build`
- [ ] Test API connection from browser console

### Post-Deployment:
- [ ] Test services page loads providers
- [ ] Test authentication (sign up/in)
- [ ] Test booking flow
- [ ] Check browser console for errors
- [ ] Check backend logs for requests

