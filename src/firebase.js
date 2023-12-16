import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB-P1VrEZg530FIA54ypqNNBoJwgZHRwqQ",
  authDomain: "botogram-87c2d.firebaseapp.com",
  projectId: "botogram-87c2d",
  storageBucket: "botogram-87c2d.appspot.com",
  messagingSenderId: "344310031426",
  appId: "1:344310031426:web:e8c4960cf63cd73be439db",
  measurementId: "G-M24L1NWL0L"
}).auth();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional