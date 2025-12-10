import admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  try {
    let serviceAccount = null;
    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

    if (serviceAccountKey) {
      try {
        // Remove leading/trailing quotes and whitespace
        let cleanedKey = serviceAccountKey.trim();
        // Remove surrounding quotes if present
        cleanedKey = cleanedKey.replace(/^["']|["']$/g, '');
        
        // Try parsing as JSON
        serviceAccount = JSON.parse(cleanedKey);
        
        // Validate required fields
        if (!serviceAccount.project_id || !serviceAccount.private_key || !serviceAccount.client_email) {
          throw new Error('Service account JSON is missing required fields (project_id, private_key, or client_email)');
        }
      } catch (parseError: any) {
        throw parseError;
      }
    }

    if (serviceAccount && serviceAccount.project_id) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      });
      console.log('✅ Firebase is connected');
    } else {
      console.log('❌ Firebase is not connected');
    }
  } catch (error: any) {
    console.log('❌ Firebase is not connected');
  }
} else {
  console.log('✅ Firebase is connected');
}

export default admin;

