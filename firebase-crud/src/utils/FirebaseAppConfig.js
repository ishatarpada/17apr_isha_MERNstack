// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD50gPZntG7AcN6TmuG-g4mg7ufTgiP8c0",
  authDomain: "fir-crud-f3372.firebaseapp.com",
  projectId: "fir-crud-f3372",
  storageBucket: "fir-crud-f3372.appspot.com",
  messagingSenderId: "130317210180",
  appId: "1:130317210180:web:369be42e0a6290e089e211",
  measurementId: "G-FRNQKV6751"
};

// Initialize Firebase
const FirebaseAppConfig = initializeApp(firebaseConfig);

export default FirebaseAppConfig;