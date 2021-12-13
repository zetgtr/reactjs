import firebase from "firebase";
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCjcnz3NYdk4Qgp-WkT4m-ap57d284JFQw",
  authDomain: "my-messages-react.firebaseapp.com",
  projectId: "my-messages-react",
  storageBucket: "my-messages-react.appspot.com",
  messagingSenderId: "705690391790",
  appId: "1:705690391790:web:c8868b5aab82a8c58d0fff",
};

firebase.initializeApp(firebaseConfig);
