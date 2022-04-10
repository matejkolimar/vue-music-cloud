import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZYVUxiDESHu16K6sE4zjxdwkvZzDei4Q",
  authDomain: "music-7a2d2.firebaseapp.com",
  projectId: "music-7a2d2",
  storageBucket: "music-7a2d2.appspot.com",
  appId: "1:309354940647:web:b462c79fc59860b2fa3a42",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

// eslint-disable-next-line object-curly-newline
export {
  auth,
  db,
  storage,
  usersCollection,
  songsCollection,
  commentsCollection,
};
