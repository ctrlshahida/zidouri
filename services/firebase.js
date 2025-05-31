import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhqYfG8o0SHgJqX53xqTDuh_CjcbXLuzo",
  authDomain: "zidouri-app.firebaseapp.com",
  projectId: "zidouri-app",
  storageBucket: "zidouri-app.firebasestorage.app",
  messagingSenderId: "48880437816",
  appId: "1:48880437816:web:22c7064ee709d87035b4cd",
  measurementId: "G-84TVK2DZ1Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);