import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAumx9qA1uMCmk0WkCISb0ecR3lreYqyIs",
  authDomain: "discord-clone-2a64b.firebaseapp.com",
  databaseURL: "https://discord-clone-2a64b.firebaseio.com",
  projectId: "discord-clone-2a64b",
  storageBucket: "discord-clone-2a64b.appspot.com",
  messagingSenderId: "378715316957",
  appId: "1:378715316957:web:ed72035c52dc0de7fc3134",
  measurementId: "G-14S9RFQ6JF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
