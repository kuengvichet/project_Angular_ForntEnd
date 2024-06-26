// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnvz8I_AX4K1rzlxv8APmM5xHlT1ASqdc",
  authDomain: "angular-crud-e0984.firebaseapp.com",
  projectId: "angular-crud-e0984",
  storageBucket: "angular-crud-e0984.appspot.com",
  messagingSenderId: "18805394653",
  appId: "1:18805394653:web:1c051785e7dc6f89735f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default {
    db
}
