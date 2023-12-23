import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

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
// const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

signInAnonymously(auth)
    .then(() => {
        console.log("Anonymous authentication successful");
    })
    .catch((error) => {
        console.error("Error signing in anonymously:", error.message);
    });
export { db };
