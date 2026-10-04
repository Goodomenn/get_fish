import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// =========================================================================
// FIREBASE CONFIGURATION
// To configure Firebase:
// 1. Create or open your Firebase project in the Firebase Console: https://console.firebase.google.com/
// 2. Click the Web icon (</>) to create a Web App and copy your config keys.
// 3. Paste them into .env or directly into the object below.
// =========================================================================

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDJf3F1JDF7c5bpXuPx7lIBVbxN9HNvLCk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "getch-fish.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "getch-fish",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "getch-fish.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "186292837194",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:186292837194:web:3aee8bd39a85bd53547fb3",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-G4PNX6Z9VM"
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  !firebaseConfig.apiKey.includes('YOUR_') &&
  firebaseConfig.apiKey.length > 5
);

let app = null;
let db = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  } catch (error) {
    console.warn('[Firebase] Initialization error:', error);
  }
}

export { app, db };
