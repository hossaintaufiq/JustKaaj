# Production Deployment Guide

## Environment Variables Setup

### Frontend (.env.local or production environment variables)

Set the following environment variables for your Next.js frontend:

```bash
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

**IMPORTANT**: 
- Replace `https://your-backend-domain.com` with your actual backend API URL (e.g., `https://api.yourdomain.com` or `https://backend.yourdomain.com`)
- After setting these variables, you MUST rebuild the frontend for changes to take effect: `npm run build`

### Backend (.env file)

Set the following environment variables for your Express backend:

```bash
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
FIREBASE_SERVICE_ACCOUNT_KEY=your_firebase_service_account_json
JWT_SECRET=your_jwt_secret
ALLOWED_ORIGINS=https://your-frontend-domain.com,https://www.your-frontend-domain.com
```

**IMPORTANT**:
- Replace `your-frontend-domain.com` with your actual frontend domain(s)
- If `ALLOWED_ORIGINS` is not set, CORS will allow all origins (`*`)
- For multiple origins, separate them with commas (no spaces)

## Common Issues and Solutions

### Issue: "Failed to load services" in production

**Cause**: The frontend is trying to connect to `http://localhost:5000` instead of your production backend URL.

**Solution**:
1. Set `NEXT_PUBLIC_API_URL` to your production backend URL
2. Rebuild the frontend: `cd frontend && npm run build`
3. Restart/redeploy your frontend

### Issue: CORS errors in production

**Cause**: The backend is not allowing requests from your frontend domain.

**Solution**:
1. Set `ALLOWED_ORIGINS` in your backend `.env` file to include your frontend domain(s)
2. Restart your backend server
3. Check browser console and backend logs for CORS errors

### Issue: API requests timing out

**Cause**: The backend URL might be incorrect or the backend is not accessible.

**Solution**:
1. Verify your backend is running and accessible: `curl https://your-backend-domain.com/health`
2. Check firewall/security group settings
3. Verify DNS settings if using a custom domain

## Verification Steps

1. **Check Frontend API URL**:
   - Open browser console on your production site
   - Check the network tab for API requests
   - Verify the request URL matches your backend domain

2. **Check Backend Logs**:
   - Look for incoming requests in your backend logs
   - Verify CORS headers are being set correctly

3. **Test API Endpoint**:
   ```bash
   curl https://your-backend-domain.com/api/providers/list
   ```
   Should return a JSON response with providers array.

