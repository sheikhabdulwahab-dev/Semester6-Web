import {getAuth , GoogleAuthProvider} from 'firebase/auth' ;
import {getFirestore} from 'firebase/firestore' ;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUPs3An73HmEWVb6dYX-wwBUHgs7AxkLs",
  authDomain: "web1-4f394.firebaseapp.com",
  projectId: "web1-4f394",
  storageBucket: "web1-4f394.firebasestorage.app",
  messagingSenderId: "618412805506",
  appId: "1:618412805506:web:3c15c9699add63c21c139b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app) ;


