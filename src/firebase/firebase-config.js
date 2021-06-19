import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2WXzSLV0yk7eszr-ai52Ep26bUymz6_I",
  authDomain: "journal-app-3d834.firebaseapp.com",
  projectId: "journal-app-3d834",
  storageBucket: "journal-app-3d834.appspot.com",
  messagingSenderId: "498334362107",
  appId: "1:498334362107:web:f50bf8bc3ef6444fa0c35e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
