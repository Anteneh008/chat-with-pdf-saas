import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgkYRpZRxGJOxse76abIdKAMk8K8za2Hs",
  authDomain: "chat-with-pdf-challenge-aa604.firebaseapp.com",
  projectId: "chat-with-pdf-challenge-aa604",
  storageBucket: "chat-with-pdf-challenge-aa604.appspot.com",
  messagingSenderId: "307430022364",
  appId: "1:307430022364:web:b31928965367d84bb92819",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app); // to connect to firestore database
const storage = getStorage(app); // pull out the storage

export { db, storage };
