// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7-81csRzSGDKu_GvAzxZ1SfgdBKUVJfw",
  authDomain: "mediumclone-4707c.firebaseapp.com",
  projectId: "mediumclone-4707c",
  storageBucket: "mediumclone-4707c.appspot.com",
  messagingSenderId: "91400864150",
  appId: "1:91400864150:web:b29a79f875245a094fddb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
