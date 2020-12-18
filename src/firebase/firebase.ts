import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDmeg19JS0pqBz4gBII4UGKTWAD3c48jic",
    authDomain: "trackt-eee2f.firebaseapp.com",
    databaseURL: "https://trackt-eee2f.firebaseio.com",
    projectId: "trackt-eee2f",
    storageBucket: "trackt-eee2f.appspot.com",
    messagingSenderId: "1003112233709",
    appId: "1:1003112233709:web:3ff4921a00f8d7ba816ae4",
    measurementId: "G-075ZBJ5P5D"

    
  };
  
 const app = firebase.initializeApp(firebaseConfig);
 export const auth = app.auth();
 export const firestore = app.firestore();
 export const storage = app.storage();


  