import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAxsEPuVFv9syAOFjOb7fiNJWYZzJWu-A8",
  authDomain: "meme-poster-9571d.firebaseapp.com",
  databaseURL: "https://meme-poster-9571d.firebaseio.com",
  projectId: "meme-poster-9571d",
  storageBucket: "meme-poster-9571d.appspot.com",
  messagingSenderId: "43901344889",
  appId: "1:43901344889:web:0953ac832dda1d137f08a8",
  measurementId: "G-MVHFSH2FFG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
