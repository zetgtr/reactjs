import firebase from 'firebase'
import '@firebase/firestore' 
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCjcnz3NYdk4Qgp-WkT4m-ap57d284JFQw",
  authDomain: "my-messages-react.firebaseapp.com",
  projectId: "my-messages-react",
  databaseURL: "https://my-messages-react-default-rtdb.firebaseio.com",
  storageBucket: "my-messages-react.appspot.com",
  messagingSenderId: "705690391790",
  appId: "1:705690391790:web:c8868b5aab82a8c58d0fff",
})

export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)
