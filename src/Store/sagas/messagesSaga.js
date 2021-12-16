import firebase from "firebase";
import { put } from "redux-saga/effects";
import { addMessage } from "./addMessage";

export function* chengeMessages({ payload }) {
  const db = firebase.database();
  const id = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref("messages")
    .child(payload.chatId)
    .on("value", (snapshot) => {
      const newMessages = [];
      snapshot.forEach((entry) => {
        messages.push(entry.val());
      });
      console.log(snapshot.key, messages);
    //   yield put({type: ADD_MESSAGE_SAGA, payload: newMessages})
    });
};

const onAddMessage = useCallback(
  (message) => {
    firebase
      .database()
      .ref("messages")
      .child(chatId)
      .child(message.id)
      .set(message);
  },
  [chatId]
);

useEffect(() => {
  firebase
    .database()
    .ref("messages")
    .child(chatId)
    .on("value", (snapshot) => {
      const newMessages = [];

      snapshot.forEach((entry) => {
        messages.push(entry.val());
      });
      setMessages(newMessages);
    });
}, []);
