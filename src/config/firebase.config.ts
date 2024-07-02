// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqGSuRtYrESk04pbsdyXhTb6Bql0X84-0",
  authDomain: "verify-3d35d.firebaseapp.com",
  projectId: "verify-3d35d",
  storageBucket: "verify-3d35d.appspot.com",
  messagingSenderId: "209485837953",
  appId: "1:209485837953:web:b33d4075275193276f3f80",
  measurementId: "G-WSZHK59B0K"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
auth.useDeviceLanguage();