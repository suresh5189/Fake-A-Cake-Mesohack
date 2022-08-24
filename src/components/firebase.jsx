import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA724d-7wnxbNUWV4tOd4ZXW9Fu5f3mD7g",
    authDomain: "disneyplus-clone-58fb8.firebaseapp.com",
    projectId: "disneyplus-clone-58fb8",
    storageBucket: "disneyplus-clone-58fb8.appspot.com",
    messagingSenderId: "336060311939",
    appId: "1:336060311939:web:481684501b87fca071eeb6",
    measurementId: "G-DY2Y3N6X80"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

export {firebase}




// 


