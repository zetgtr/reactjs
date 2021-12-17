import { call, put, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import firebase from "firebase";
import {
  ADD_CHAT_SAGA,
  CHENGE_AUTH_USER_SAGA,
  CHENGE_LOADING_SAGA,
  ERROR_FIREBASE_SAGA,
  GET_MESSAGES_FIREBASE_SAGA,
} from "./constants";
import { chengeAuthorAction } from "../Profile/actions";
import id from "faker/lib/locales/id_ID";

export function* singInSaga({ payload }) {
  const data = yield pushSingIn(payload);
  yield put(data);
  const user = yield call(getAuthChannel);
  const result = yield take(user);
  yield put({ type: CHENGE_AUTH_USER_SAGA, payload: result });
  yield put({ type: CHENGE_LOADING_SAGA });
}

const pushSingIn = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { type: ERROR_FIREBASE_SAGA, payload: "" };
  } catch (error) {
    return { type: ERROR_FIREBASE_SAGA, payload: error.message };
  }
};

export function* singUpSaga({ payload }) {
  const data = yield pushSingUp(payload);
  yield put(data);
}
const pushSingUp = async ({ email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    return { type: ERROR_FIREBASE_SAGA, payload: "" };
  } catch (error) {
    return { type: ERROR_FIREBASE_SAGA, payload: error.message };
  }
};

export function* onAuthStateChanged() {
  const user = yield call(getAuthChannel);
  const result = yield take(user);
  yield put({ type: CHENGE_AUTH_USER_SAGA, payload: result });
  yield handleInitFirebaseProfile();
  yield handleInitFirebaseChats();
  yield put({ type: CHENGE_LOADING_SAGA });
}

function getAuthChannel() {
  const user = eventChannel((emit) => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => emit({ user }));
    return unsubscribe;
  });
  return user;
}

function* handleInitFirebaseProfile() {
  const id = firebase.auth().currentUser.uid;
  const auter = eventChannel((emit) => {
    const unsubscribe = firebase
      .database()
      .ref("profile")
      .child(id)
      .child("userName")
      .on("value", (snapshot) => emit({ snapshot }));
    return unsubscribe;
  });
  const result = yield take(auter);
  yield put(chengeAuthorAction(result.snapshot.val()));
}

const getPayloadFromSnapshotMessages = (snapshot) => {
  const messages = [];
  snapshot.forEach((mes) => {
    messages.push(mes.val());
  });
  return { chatId: snapshot.key, messages };
};

const getPayloadFromSnapshotChats = (snapshot) => {
  const chats = [];
  const id = []
  let i = 0 // замучился думать что тут можно использовать вместо счетчика 
  snapshot.forEach((chat) => {
    chats.push(chat.val())
    chats[i]["firebaseIdChat"] = chat.key
    i++
  });
  return { chats, firebaseIdChat: id };
};

export function* handleInitFirebaseMessages({ payload }) {
  const id = firebase.auth().currentUser.uid;
  const messages = eventChannel((emit) => {
    const unsubscribe = firebase
      .database()
      .ref("messages")
      .child(id)
      .child(payload.chatId)
      .on("value", (snapshot) =>
        emit({
          payload: getPayloadFromSnapshotMessages(snapshot),
        })
      );
    return unsubscribe;
  });
  const result = yield take(messages);
  yield put({ type: GET_MESSAGES_FIREBASE_SAGA, payload: result });
}

export function* handleInitFirebaseChats() {
  const id = firebase.auth().currentUser.uid;
  const chats = eventChannel((emit) => {
    const unsubscribe = firebase
      .database()
      .ref("chats")
      .child(id)
      .on("value", (snapshot) =>
        emit({
          payload: getPayloadFromSnapshotChats(snapshot),
        })
      );
    return unsubscribe;
  });
  const result = yield take(chats);
  yield put({ type: ADD_CHAT_SAGA, payload: result });
}