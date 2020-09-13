import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAtFEzMzRONZ6tBdY792b3HLrvUE_-jWlk",
    authDomain: "planny-e6b84.firebaseapp.com",
    databaseURL: "https://planny-e6b84.firebaseio.com",
    projectId: "planny-e6b84",
    storageBucket: "planny-e6b84.appspot.com",
    messagingSenderId: "997259568304",
    appId: "1:997259568304:web:2ce90fe4e6937d49bbc775",
    measurementId: "G-254YRL1CFP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;