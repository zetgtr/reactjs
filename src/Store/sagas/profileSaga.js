import firebase from "firebase";
import { call, put, take } from "redux-saga/effects";
import { reduxSagaFirebase } from "../../Services/firebase";
import { chengeAuthorAction } from "../Profile/actions";
import { handleInitFirebaseChats } from "./chatsSaga";

export const chengeAuthor = ({ payload }) => {
  const db = firebase.database();
  const id = firebase.auth().currentUser.uid;
  db.ref("profile").child(id).child("userName").set(payload.name);
};

export function* handleInitFirebaseProfile() {
  const id = firebase.auth().currentUser.uid;
  const channel = yield call(
    reduxSagaFirebase.database.channel,
    "profile/" + id + "/userName"
  );
  while (true) {
    const { value: todos } = yield take(channel);
    yield put(chengeAuthorAction(todos));
    yield handleInitFirebaseChats();
  }
}
