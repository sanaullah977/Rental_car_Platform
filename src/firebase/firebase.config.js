// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Rny4YoUdTvQYcyUBebdeXcmY73-VLbI",
  authDomain: "winter-pet-care-5aa01.firebaseapp.com",
  projectId: "winter-pet-care-5aa01",
  storageBucket: "winter-pet-care-5aa01.firebasestorage.app",
  messagingSenderId: "845154377577",
  appId: "1:845154377577:web:871ac7c70c3dc8db06e7f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app