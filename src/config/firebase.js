
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
  apiKey: "AIzaSyDzPzmxag21yNqQqLooOouO_6wvG1DZIu8",
  authDomain: "learn-firebase-7fa63.firebaseapp.com",
  projectId: "learn-firebase-7fa63",
  storageBucket: "learn-firebase-7fa63.firebasestorage.app",
  messagingSenderId: "969958419657",
  appId: "1:969958419657:web:b5d53f2eb5062002117118",
  measurementId: "G-1MPGTYNMEY"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
