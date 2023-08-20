// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQIlNjoHJ5FZFSSqYggGY-DXlf50fgtM0",
  authDomain: "pfcoder-react-john.firebaseapp.com",
  projectId: "pfcoder-react-john",
  storageBucket: "pfcoder-react-john.appspot.com",
  messagingSenderId: "1021098850637",
  appId: "1:1021098850637:web:500a3d49c04ce73d43df04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);