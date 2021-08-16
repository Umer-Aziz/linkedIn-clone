
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBq4zaaVAlF9X-a18HrP-KYLeHfK_mZtoI",
    authDomain: "linkedin-clone-6738d.firebaseapp.com",
    projectId: "linkedin-clone-6738d",
    storageBucket: "linkedin-clone-6738d.appspot.com",
    messagingSenderId: "741115769419",
    appId: "1:741115769419:web:a053b48b782bd18c5693ce",
    measurementId: "G-ZT7JL9CRNM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;