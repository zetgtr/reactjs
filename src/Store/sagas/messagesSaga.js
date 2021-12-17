import faker from "faker/locale/ru";
import firebase from "firebase";
import { delay } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";

export function* onAddMessage({ payload }) {
  const id = firebase.auth().currentUser.uid;
  firebase.database().ref("messages").child(id).child(payload.chatId).push({
    name: payload.name,
    id: uuidv4(),
    chatClass: "human",
    textMessage: payload.textMessage,
  });
  yield delay(1500);
  firebase
    .database()
    .ref("messages")
    .child(id)
    .child(payload.chatId)
    .push({
      name: "Бот",
      id: uuidv4(),
      chatClass: "bot",
      textMessage: faker.lorem.text(),
    });
}
