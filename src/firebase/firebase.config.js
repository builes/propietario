import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJL_S0cnfnFRAbWWKRKrW3shtXfMNzpSY",
    authDomain: "dream-house-ag.firebaseapp.com",
    projectId: "dream-house-ag",
    storageBucket: "dream-house-ag.appspot.com",
    messagingSenderId: "862685202420",
    appId: "1:862685202420:web:4f5b5e078a0846723adba1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export {
      db,
      googleAuthProvider,
      facebookAuthProvider,
      firebase
  }