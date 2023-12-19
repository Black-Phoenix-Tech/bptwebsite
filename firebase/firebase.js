import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signInAnonymously } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: 'YOUR_FIREBASE_API_KEY',
//   authDomain: 'YOUR_FIREBASE_AUTH_DOMAIN',
//   projectId: 'YOUR_FIREBASE_PROJECT_ID',
//   storageBucket: 'YOUR_FIREBASE_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_FIREBASE_MESSAGING_SENDER_ID',
//   appId: 'YOUR_FIREBASE_APP_ID',
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGCRyFfDjk9VQSmOSA9_QgDk70txkYs7Y",
    authDomain: "black-phoenix-website.firebaseapp.com",
    projectId: "black-phoenix-website",
    storageBucket: "black-phoenix-website.appspot.com",
    messagingSenderId: "1088900404011",
    appId: "1:1088900404011:web:118d911542c9b5ffaeeb6e",
    measurementId: "G-QN4Y735B8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

signInAnonymously(auth)
    .then(() => {
        // Anonymous sign-in successful
        console.log("Anonymous authentication successful");
    })
    .catch((error) => {
        console.error("Error signing in anonymously:", error.message);
    });

export { auth, db, sendPasswordResetEmail, analytics };
