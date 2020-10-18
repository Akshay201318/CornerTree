import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAmhoDJBV_tGpPimB7UMDpCa9HRc3yMzCI",
    authDomain: "cornertree-c15fa.firebaseapp.com",
    databaseURL: "https://cornertree-c15fa.firebaseio.com",
    projectId: "cornertree-c15fa",
    storageBucket: "cornertree-c15fa.appspot.com",
    messagingSenderId: "882704854673",
    appId: "1:882704854673:web:5b83170b08cc02a779d930"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
