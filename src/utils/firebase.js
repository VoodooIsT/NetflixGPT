// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB8xOWb_lQVFXemR0zK11Ci5tNe4q5-sk",
  authDomain: "netflixgpt-df0c9.firebaseapp.com",
  projectId: "netflixgpt-df0c9",
  storageBucket: "netflixgpt-df0c9.appspot.com",
  messagingSenderId: "974478749940",
  appId: "1:974478749940:web:71d3c3009bf64e632c2ea1",
  measurementId: "G-6BC3DLLZZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();