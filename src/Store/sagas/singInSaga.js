import { call, put } from "redux-saga/effects";
import firebase from "firebase";
import {
  CHENGE_AUTH_USER_SAGA,
  CHENGE_LOADING_SAGA,
  ERROR_FIREBASE_SAGA,
} from "./constants";

export function* singInSaga({ payload }) {
  const data = yield pushSingIn(payload);
  yield put(data);
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

export function* authSaga() {
  const user = yield call(onAuthStateChanged)
  yield put({ type: CHENGE_AUTH_USER_SAGA, payload: user});
  yield put({ type: CHENGE_LOADING_SAGA });
}

  function onAuthStateChanged() {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
          resolve(user);
      });
    });
  }