import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARRORLqcwnTHtNDMUDAIPSSgYjdusmeOY",
  authDomain: "devhub-cd062.firebaseapp.com",
  projectId: "devhub-cd062",
  storageBucket: "devhub-cd062.appspot.com",
  messagingSenderId: "231729868319",
  appId: "1:231729868319:web:1fe7d429ae5bbe57a16f2a",
  measurementId: "G-XERX78HCDB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
