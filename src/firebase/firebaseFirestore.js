import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDENFtlCn47vv8rxZqngiRJ3JQNMXmyiEk",
  authDomain: "dreamhouse-afdd4.firebaseapp.com",
  projectId: "dreamhouse-afdd4",
  storageBucket: "dreamhouse-afdd4.appspot.com",
  messagingSenderId: "1091600903057",
  appId: "1:1091600903057:web:6404c35ac457ea877cc830",
  measurementId: "G-C5H813SVTJ",
};

const fire = firebase.initializeApp(firebaseConfig);
const store = fire.firestore();

export { store };
