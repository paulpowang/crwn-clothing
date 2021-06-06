import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhgFhUUr-Re_T_KbqtJchHtkbSNnkc6Ig",
  authDomain: "crwn-db-a3ec1.firebaseapp.com",
  projectId: "crwn-db-a3ec1",
  storageBucket: "crwn-db-a3ec1.appspot.com",
  messagingSenderId: "548933909230",
  appId: "1:548933909230:web:f3feeea838f240686651ff",
  measurementId: "G-MYTHPWWK02",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
