// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDivbmhUYJwWZ2dyQ7wHPFwUbIBg8UOwUY",
  authDomain: "truview-bhatti.firebaseapp.com",
  projectId: "truview-bhatti",
  storageBucket: "truview-bhatti.appspot.com",
  messagingSenderId: "513270992384",
  appId: "1:513270992384:web:939cd5237e4e86ed1212e5",
  measurementId: "G-951MKRKM0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}