import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzksGEALBQbv8DGyJJDjo1QJdViko2R70",
  authDomain: "firegram-fd4ea.firebaseapp.com",
  projectId: "firegram-fd4ea",
  storageBucket: "firegram-fd4ea.appspot.com",
  messagingSenderId: "935709922989",
  appId: "1:935709922989:web:3203e10361eec9079b5824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};
