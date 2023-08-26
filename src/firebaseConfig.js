  // src/firebaseConfig.js
     import firebase from "firebase/compat/app";
     import "firebase/compat/auth";
     import "firebase/compat/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC77fIFcDKhUX5YY6r1M3l6YkjAPHeiIAc",
  authDomain: "form-d6a31.firebaseapp.com",
  databaseURL: "https://form-d6a31-default-rtdb.firebaseio.com",
  projectId: "form-d6a31",
  storageBucket: "form-d6a31.appspot.com",
  messagingSenderId: "274515544444",
  appId: "1:274515544444:web:7ba46bf6a9f33df97a7cf9",
  measurementId: "G-SVTHXZRRQX"
};

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    export const auth = firebaseApp.auth();
    export const firestore = firebaseApp.firestore(); // Initialize Firestore

    export default firebaseApp;