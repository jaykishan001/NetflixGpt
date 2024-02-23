// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2hjXiyMlS_Bl_V25QIUa_oyqXi90yKQc",
    authDomain: "netflixgpt-cc565.firebaseapp.com",
    projectId: "netflixgpt-cc565",
    storageBucket: "netflixgpt-cc565.appspot.com",
    messagingSenderId: "481315944796",
    appId: "1:481315944796:web:5a8e422317e1d508592999",
    measurementId: "G-4Z2PRK00WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();