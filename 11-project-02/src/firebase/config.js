// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH32lRWcPqylCbexau0-rv1PWPeE_zcGw",
  authDomain: "react-online-shop-d5455.firebaseapp.com",
  projectId: "react-online-shop-d5455",
  storageBucket: "react-online-shop-d5455.appspot.com",
  messagingSenderId: "450939232277",
  appId: "1:450939232277:web:cb43d7d6e6181e6093ee1c"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);