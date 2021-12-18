import { call, put, take } from "redux-saga/effects";
import firebase from "firebase";
import {
  ADD_CHAT_SAGA,
  CHENGE_AUTH_USER_SAGA,
  CHENGE_LOADING_SAGA,
  ERROR_FIREBASE_SAGA,
  GET_MESSAGES_FIREBASE_SAGA,
} from "./constants";
import { chengeAuthorAction } from "../Profile/actions";
import { reduxSagaFirebase } from "../../Services/firebase";

export function* singInSaga({ payload }) {
  const data = yield pushSingIn(payload);
  yield put(data);
  const user = yield call(onAuthStateChanged);
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
 const channel = yield call(reduxSagaFirebase.auth.channel);
  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put({ type: CHENGE_AUTH_USER_SAGA, payload: user });
      yield handleInitFirebaseProfile();
    }else{
      yield put({ type: CHENGE_AUTH_USER_SAGA, payload: null })
      yield put({ type: CHENGE_LOADING_SAGA });
    }
  }
}

function* handleInitFirebaseProfile() {
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

export function* handleInitFirebaseMessages({ payload }) {
  const id = firebase.auth().currentUser.uid;
  const channel = yield call(
    reduxSagaFirebase.database.channel,
    "messages/" + id + "/" + payload.chatId
  );
  while (true) {
    const { value: todos } = yield take(channel);
    console.log(todos)
    if (todos == null) {
      const isNull = [];
      yield put({ type: GET_MESSAGES_FIREBASE_SAGA, payload: {chatId: payload.chatId, messages: isNull} });
    } else {
      yield put({
        type: GET_MESSAGES_FIREBASE_SAGA,
        payload: { chatId: payload.chatId, messages: todos },
      });
    }
  }
}

export function* handleInitFirebaseChats() {
  const id = firebase.auth().currentUser.uid;
  const channel = yield call(reduxSagaFirebase.database.channel, "chats/" + id);
  while (true) {
    const { value: todos } = yield take(channel);
    if (todos == null) {
      const isNull = [];
      yield put({ type: ADD_CHAT_SAGA, payload: isNull });
    } else {
      yield put({ type: ADD_CHAT_SAGA, payload: todos });
    }
    yield put({ type: CHENGE_LOADING_SAGA });
  }
}
