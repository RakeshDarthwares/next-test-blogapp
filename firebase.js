import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnxMuSfZoyyGfsm1koBNDWwxkRL41EP4s",
  authDomain: "nextjs-c3fdc.firebaseapp.com",
  projectId: "nextjs-c3fdc",
  storageBucket: "nextjs-c3fdc.appspot.com",
  messagingSenderId: "504660313164",
  appId: "1:504660313164:web:0facad2ccf80aece2b20e9",
  measurementId: "G-9FMZ8CGZ5D",
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimestamp };
