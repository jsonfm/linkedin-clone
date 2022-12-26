// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7BI_fm83U0zrGVosV8SPofVF95GwyYvA",
  authDomain: "linkedin-clone-d37ee.firebaseapp.com",
  projectId: "linkedin-clone-d37ee",
  storageBucket: "linkedin-clone-d37ee.appspot.com",
  messagingSenderId: "144880822519",
  appId: "1:144880822519:web:aad7b88089e886b1440bf2",
  measurementId: "G-WY08SQ0L2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);