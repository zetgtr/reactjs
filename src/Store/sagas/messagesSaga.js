import faker from "faker/locale/ru";
import firebase from "firebase";
import { call, delay, put, take } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import { reduxSagaFirebase } from "../../Services/firebase";
import { getMessagesFirebaseActionSaga } from "./actionsSaga";

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

export function* handleInitFirebaseMessages({ payload }) {
  const id = firebase.auth().currentUser.uid;
  const channel = yield call(
    reduxSagaFirebase.database.channel,
    "messages/" + id + "/" + payload.chatId
  );
  while (true) {
    const { value: todos } = yield take(channel);
    console.log(todos);
    if (todos == null) {
      const isNull = [];
      yield put(
        getMessagesFirebaseActionSaga({ chatId: payload.chatId, messages: isNull })
      );
    } else {
      yield put(
        getMessagesFirebaseActionSaga({ chatId: payload.chatId, messages: todos })
      );
    }
  }
}
