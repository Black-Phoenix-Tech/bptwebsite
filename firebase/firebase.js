import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    sendPasswordResetEmail,
    signInAnonymously,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import "firebase/functions";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyBGCRyFfDjk9VQSmOSA9_QgDk70txkYs7Y",
    authDomain: "black-phoenix-website.firebaseapp.com",
    projectId: "black-phoenix-website",
    storageBucket: "black-phoenix-website.appspot.com",
    messagingSenderId: "1088900404011",
    appId: "1:1088900404011:web:118d911542c9b5ffaeeb6e",
    measurementId: "G-QN4Y735B8E",
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

const sendEmail = httpsCallable(functions, "sendEmail");

signInAnonymously(auth)
    .then(() => {
        console.log("Anonymous authentication successful");
    })
    .catch((error) => {
        console.error("Error signing in anonymously:", error.message);
    });
onAuthStateChanged(auth, (user) => {
    if (user) {
    } else {
        console.error("User is not authenticated");
    }
});
export { auth, db, sendPasswordResetEmail, analytics, sendEmail };
