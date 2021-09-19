// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKMrq8GNJKh4am0AgC0wDccoqoVGhjXXM",
  authDomain: "twitter-clone-f6b0f.firebaseapp.com",
  projectId: "twitter-clone-f6b0f",
  storageBucket: "twitter-clone-f6b0f.appspot.com",
  messagingSenderId: "759366505707",
  appId: "1:759366505707:web:e5e4919494cda0f9cc9aae",
  measurementId: "G-18BPBY5ZKS",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = firebaseApp.firestore();

export default db;
