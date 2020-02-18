import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcJCTTMWZQNQ85SITZnPE3AqN6wdjdJQE",
  authDomain: "crown-db-7ed41.firebaseapp.com",
  databaseURL: "https://crown-db-7ed41.firebaseio.com",
  projectId: "crown-db-7ed41",
  storageBucket: "crown-db-7ed41.appspot.com",
  messagingSenderId: "797837944383",
  appId: "1:797837944383:web:860bafb8782861dbdaba8a",
  measurementId: "G-QBL83EJN7H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
