 import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

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
const auth = getAuth(app)
export {auth}