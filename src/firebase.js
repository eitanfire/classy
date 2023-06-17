// import * as firebase from "./firebase";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjPS42oprAZkh7yY46z5nU1IN76kdIstw",
  authDomain: "classy-d9757.firebaseapp.com",
  projectId: "classy-d9757",
  storageBucket: "classy-d9757.appspot.com",
  messagingSenderId: "1097579719127",
  appId: "1:1097579719127:web:06681698626387cb60c392",
  measurementId: "G-SS8H09897W",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// Sign in and check or create account in firestore
const signInWithGoogle = async () => {
  try {
    const response = await auth.signInWithPopup(googleProvider);
    console.log(response.user);
    const user = response.user;
    console.log(`User ID - ${user.uid}`);
    const querySnapshot = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (querySnapshot.docs.length === 0) {
      // create a new user
      await db.collection("users").add({
        uid: user.uid,
        enrolledClassrooms: [],
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export { app, auth, db, signInWithGoogle, logout };
