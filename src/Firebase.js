// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs7O5DHkpDd37JRtrJYWj30dKMKO2R9gw",
    authDomain: "telegram-clone-9cc59.firebaseapp.com",
    projectId: "telegram-clone-9cc59",
    storageBucket: "telegram-clone-9cc59.appspot.com",
    messagingSenderId: "665985233555",
    appId: "1:665985233555:web:0eacd1f8da759564ea9366",
    measurementId: "G-RZZ49SEPT0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();  //for google authentication

  export {auth, provider};
  export default db;