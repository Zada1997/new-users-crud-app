import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyArU0vLHEUBg0asIizGUu0YVRo6gNwaLkI",
  authDomain: "users-crud-d94be.firebaseapp.com",
  projectId: "users-crud-d94be",
  storageBucket: "users-crud-d94be.appspot.com",
  messagingSenderId: "587392295952",
  appId: "1:587392295952:web:46efed2f955ab571429695",
  measurementId: "G-PQGE65JMGB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
