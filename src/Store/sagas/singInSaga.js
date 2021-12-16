import { call, put, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import firebase from "firebase";
import {
  CHENGE_AUTH_USER_SAGA,
  CHENGE_LOADING_SAGA,
  ERROR_FIREBASE_SAGA,
} from "./constants";
import { chengeAuthorAction } from "../Profile/actions";

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

function getAuthChannel() {
  const user = eventChannel((emit) => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => emit({ user }));
    return unsubscribe;
  });
  return user;
}

export function* onAuthStateChanged() {
  const user = yield call(getAuthChannel);
  const result = yield take(user);
  yield put({ type: CHENGE_AUTH_USER_SAGA, payload: result });
  yield put({ type: CHENGE_LOADING_SAGA });
  yield handleInitFirebaseProfile();
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

function* handleInitFirebaseMessages() {
  const id = firebase.auth().currentUser.uid;
  const auter = eventChannel((emit) => {
    const unsubscribe = firebase
      .database()
      .ref("messages")
      .child(id)
      .child("userName")
      .on("value", (snapshot) => emit({ snapshot }));
    return unsubscribe;
  });
  const result = yield take(auter);
  yield put(chengeAuthorAction(result.snapshot.val()));
}
