import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3lFu57NI61-51wc62R-rIHe1e4ripV4U",
  authDomain: "fake-a-cake.firebaseapp.com",
  projectId: "fake-a-cake",
  storageBucket: "fake-a-cake.appspot.com",
  messagingSenderId: "321417925894",
  appId: "1:321417925894:web:09709d3cd70b89724b3a87",
  measurementId: "G-CEJQ82J9QK"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

export {firebase}




// 


