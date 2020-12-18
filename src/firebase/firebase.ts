import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBAJjxmE8bnFi9GkAnCrQk3qxsX3MDfqZ8",
    authDomain: "mihome-9c98f.firebaseapp.com",
    projectId: "mihome-9c98f",
    storageBucket: "mihome-9c98f.appspot.com",
    messagingSenderId: "172881772634",
    appId: "1:172881772634:web:4f2cb421c15e7cc23d9863"
  };
  
 const app = firebase.initializeApp(firebaseConfig);
 export const auth = app.auth();
 export const firestore = app.firestore();
 export const storage = app.storage();


  