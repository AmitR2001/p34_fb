// Import the Firebase modules that you need in your app.
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // For Realtime Database
// or
import { getFirestore } from "firebase/firestore"; // For Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // For Realtime Database
// or
const db = getFirestore(app); // For Firestore