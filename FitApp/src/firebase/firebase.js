// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvkFMQCxYR7V-VxY3HxQkULGzvVXcR-s",
  authDomain: "create-user-f02a0.firebaseapp.com",
  databaseURL: "https://create-user-f02a0-default-rtdb.firebaseio.com",
  projectId: "create-user-f02a0",
  storageBucket: "create-user-f02a0.firebasestorage.app",
  messagingSenderId: "1098296195763",
  appId: "1:1098296195763:web:af4419e4aedc66a5fb8ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore(app)
export default app