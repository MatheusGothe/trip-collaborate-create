import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7FRrZCa9BBd_T3nCCX6r5mqs4YFjGKDo",
  authDomain: "travel-planner-a62ba.firebaseapp.com",
  projectId: "travel-planner-a62ba",
  storageBucket: "travel-planner-a62ba.firebasestorage.app",
  messagingSenderId: "356678030530",
  appId: "1:356678030530:web:704470362f2f58e5aa575b",
  measurementId: "G-7NJXJRBZ04"
};

// Inicializa o app (garante que só inicializa uma vez)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

// Inicializa o auth usando o app criado
const auth = getAuth(app);

// Exporta app e auth para usar em outros lugares
export { app, auth };
