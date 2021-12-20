import firebase from "firebase";
import { call, put, take } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import { reduxSagaFirebase } from "../../Services/firebase";
import { addChatActionSaga, chengeLoadingActionSaga } from "./actionsSaga";

export const onAddChats = ({ payload }) => {
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

export function* handleInitFirebaseChats() {
  const id = firebase.auth().currentUser.uid;
  const channel = yield call(reduxSagaFirebase.database.channel, "chats/" + id);
  while (true) {
    const { value: todos } = yield take(channel);
    if (todos == null) {
      const isNull = [];
      yield put(addChatActionSaga(isNull));
    } else {
      yield put(addChatActionSaga(todos));
    }
    yield put(chengeLoadingActionSaga());
  }
}
