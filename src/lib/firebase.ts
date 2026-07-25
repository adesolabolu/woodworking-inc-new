import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, doc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAhX3NqysnKuw2BbWaDCfN30uRGeYzt9N0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "project-193adbd3-2fc9-43cf-adb.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "project-193adbd3-2fc9-43cf-adb",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "project-193adbd3-2fc9-43cf-adb.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "336423578319",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:336423578319:web:b13c81224330f311b7a5ba"
};

// Initialize the Firebase app instance
const app = initializeApp(firebaseConfig);

// Connect specifically to your woodworking database
const dbName = import.meta.env.VITE_FIREBASE_DATABASE_NAME || "woodworking-db";
export const db = getFirestore(app, dbName);
