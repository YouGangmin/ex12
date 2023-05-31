// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArrLxK6pcjVZF3Kn8GdT8GhaQDU5b_Et0",
  authDomain: "fir-db278.firebaseapp.com",
  projectId: "fir-db278",
  storageBucket: "fir-db278.appspot.com",
  messagingSenderId: "207438212513",
  appId: "1:207438212513:web:812aa31b692491d6196fe0",
  measurementId: "G-D051MSZTRL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);