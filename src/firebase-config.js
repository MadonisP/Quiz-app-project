import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbfl6C3UV1ix6iptB7o8UljnzjeHaTay4",
  authDomain: "quiz-web-app-20b50.firebaseapp.com",
  projectId: "quiz-web-app-20b50",
  storageBucket: "quiz-web-app-20b50.appspot.com",
  messagingSenderId: "464599642230",
  appId: "1:464599642230:web:89e57acef8a97da4eaaf57"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);