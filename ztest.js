// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { collection, getDocs, query } from 'firebase/firestore'
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
const db = getFirestore(app);

// const emails = collection(db, 'emails')
// const snapshot = await getDocs(emails) 
// const emailList = snapshot.docs.map(doc => doc.data())

const q = query(collection(db, 'emails'));

const snapshot = await getDocs(q);
const myEmail = snapshot.docs.map(doc => doc.data())

myEmail.forEach((doc) => {
    console.log(doc.email)
    return
  });
