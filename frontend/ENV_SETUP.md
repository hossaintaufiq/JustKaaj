# Frontend Environment Setup

Create a `.env.local` file in the `frontend` directory with the following variables:

```env
# Firebase Configuration
# Get these values from Firebase Console > Project Settings > General > Your apps
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Getting Firebase Configuration

1. Go to Firebase Console (https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Go to Project Settings (gear icon)
4. Scroll down to "Your apps" section
5. If you haven't created a web app, click "Add app" and select the web icon (`</>`)
6. Copy the configuration values from the `firebaseConfig` object

## Firebase Authentication Setup

1. In Firebase Console, go to Authentication > Sign-in method
2. Enable the following sign-in methods:
   - **Email/Password**: Enable and save
   - **Google**: Enable, enter project support email, and save
   - **Facebook**: Enable, enter App ID and App Secret from Facebook Developers, and save

## Authorized Domains

Make sure to add your development domain (`localhost`) to authorized domains:
1. Go to Authentication > Settings
2. Scroll to "Authorized domains"
3. Ensure `localhost` is listed (it should be by default)

