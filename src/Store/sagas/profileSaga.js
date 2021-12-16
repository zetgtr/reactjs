import firebase from "firebase";

export const chengeAuthor = ({payload}) => {
    const db = firebase.database()
  const id = firebase.auth().currentUser.uid
  db.ref("profile").child(id).child('userName').set(payload.name)
  }