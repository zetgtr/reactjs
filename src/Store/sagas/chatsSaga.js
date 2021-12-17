import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";

export function* onAddChats({ payload }) {
  const id = firebase.auth().currentUser.uid;
  const chatId = uuidv4()
  firebase.database().ref("chats").child(id).push({
    id: chatId,
    name: payload.chatName,
  });
}

export const delliteCats = ({payload}) => {
    const id = firebase.auth().currentUser.uid;
    firebase.database().ref("chats").child(id).child(payload.firebaseIdChat).remove()
    firebase.database().ref("messages").child(id).child(payload.id).remove()
}