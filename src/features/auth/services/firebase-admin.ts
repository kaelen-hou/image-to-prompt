import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Check environment variables
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

if (!projectId || !privateKey || !clientEmail) {
  throw new Error('Missing required Firebase Admin environment variables');
}

// Initialize Firebase Admin SDK
if (getApps().length === 0) {
  initializeApp({
    credential: cert({
      projectId,
      privateKey: privateKey.replace(/\\n/g, '\n'),
      clientEmail,
    }),
  });
}

export const adminDb = getFirestore();