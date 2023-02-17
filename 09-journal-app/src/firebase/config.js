// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdPTa8_b7mMn9JK4uC860pFBa9xttjAj0",
  authDomain: "react-curso-64867.firebaseapp.com",
  projectId: "react-curso-64867",
  storageBucket: "react-curso-64867.appspot.com",
  messagingSenderId: "310369209308",
  appId: "1:310369209308:web:f81ae678d8623eff3ddd19"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);