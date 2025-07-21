// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7FRrZCa9BBd_T3nCCX6r5mqs4YFjGKDo",
  authDomain: "travel-planner-a62ba.firebaseapp.com",
  projectId: "travel-planner-a62ba",
  storageBucket: "travel-planner-a62ba.firebasestorage.app",
  messagingSenderId: "356678030530",
  appId: "1:356678030530:web:704470362f2f58e5aa575b",
  measurementId: "G-7NJXJRBZ04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);