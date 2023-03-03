// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDwKQYTSrlSK7-O3kSaLg2oErcCcN5wl0",
  authDomain: "tariku-4a0af.firebaseapp.com",
  projectId: "tariku-4a0af",
  storageBucket: "tariku-4a0af.appspot.com",
  messagingSenderId: "46653956314",
  appId: "1:46653956314:web:d9ef71298650dab38f45e3",
  measurementId: "G-Q0H9VWQ3J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}


//.......................................
//.......................................


// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore"

// const firebaseConfig = {
//      apiKey: "AIzaSyCDwKQYTSrlSK7-O3kSaLg2oErcCcN5wl0",
//      authDomain: "tariku-4a0af.firebaseapp.com",
//     projectId: "tariku-4a0af",
//     storageBucket: "tariku-4a0af.appspot.com",
//      messagingSenderId: "46653956314",
//     appId: "1:46653956314:web:d9ef71298650dab38f45e3",
//      measurementId: "G-Q0H9VWQ3J3"
//    };

//    const firebaseapp = firebase.initializeApp(firebaseConfig);

//    const db = firebaseapp.firestore();
//    const auth = firebase.auth();

//    export {db, auth}