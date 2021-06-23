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

const firebaseConfigTesting = {
  apiKey: "AIzaSyCEagJ-M0BmUIhBuQQyT4x7pS5FnuBhHyI",
  authDomain: "covid-19-tracker-adc50.firebaseapp.com",
  databaseURL: "https://covid-19-tracker-adc50.firebaseio.com",
  projectId: "covid-19-tracker-adc50",
  storageBucket: "covid-19-tracker-adc50.appspot.com",
  messagingSenderId: "991336955768",
  appId: "1:991336955768:web:5006a81bf67ca8e5ab128d",
};

if (process.env.NODE_ENV === "test") {
  //testing
  firebase.initializeApp(firebaseConfigTesting);
} else {
  //dev/prod
  firebase.initializeApp(firebaseConfig);
}

//firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
