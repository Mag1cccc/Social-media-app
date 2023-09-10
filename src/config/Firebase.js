// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiAdaMOaKK5vR2IZmQl_MXTCakwCI2ziQ",
  authDomain: "social-media-project-42de2.firebaseapp.com",
  projectId: "social-media-project-42de2",
  storageBucket: "social-media-project-42de2.appspot.com",
  messagingSenderId: "300262703178",
  appId: "1:300262703178:web:5ab85accee979d2c9166b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const dataBase = getFirestore(app);