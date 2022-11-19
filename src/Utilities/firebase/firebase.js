// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY_uu5zimaJEvT_Yw9r6QKv0w1c-oukPI",
  authDomain: "karam-hecho-a-mano-4fe73.firebaseapp.com",
  projectId: "karam-hecho-a-mano-4fe73",
  storageBucket: "karam-hecho-a-mano-4fe73.appspot.com",
  messagingSenderId: "73974643169",
  appId: "1:73974643169:web:a62785fbece82b3d46faa0",
  measurementId: "G-FB838VS9KL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
