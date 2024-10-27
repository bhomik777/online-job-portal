
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqCw45ShB2qfQWIqOMx3E21FKwAoQwdBg",
  authDomain: "online-job-portal-64748.firebaseapp.com",
  projectId: "online-job-portal-64748",
  storageBucket: "online-job-portal-64748.appspot.com",
  messagingSenderId: "983861715895",
  appId: "1:983861715895:web:1a01e9bec07603b09c3e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};