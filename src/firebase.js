import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBypw2LWvvCkd1pjhGBBo8M9pyxDh_CC08",
  authDomain: "learn-latin-f6d20.firebaseapp.com",
  databaseURL: "https://learn-latin-f6d20-default-rtdb.firebaseio.com",
  projectId: "learn-latin-f6d20",
  storageBucket: "learn-latin-f6d20.appspot.com",
  messagingSenderId: "203083397686",
  appId: "1:203083397686:web:fdfb49fc881cce634a3697",
  measurementId: "G-YLFVMTZJ9P",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
