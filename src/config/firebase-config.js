// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByB5p0zLVxReBzm-YNaP6woOWKlXgG46A",
    authDomain: "where-is-who-33b7c.firebaseapp.com",
    projectId: "where-is-who-33b7c",
    storageBucket: "where-is-who-33b7c.appspot.com",
    messagingSenderId: "541332983594",
    appId: "1:541332983594:web:34903fd165f9fe6e4c9853",
    measurementId: "G-8JGYHQHVTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore database
export const db = getFirestore(app);
