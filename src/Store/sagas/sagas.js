import { takeEvery } from "redux-saga/effects";
import {
  CHENGE_AUTH_ACTION,
  SIGN_IN_ACTION,
  SIGN_UP_ACTION,
} from "../Auth/constants";
import {
  ADD_MESSAGE_ACTION,
  GET_MESSAGES_FIREBASE_ACTION,
} from "../Messages/constants";
import { CHENGE_FIREBASE_NAME_ACTION } from "../Profile/constants";
import { GET_FON_REQUEST } from "../Settings/constants";
import { handleInitFirebaseMessages, onAddMessage } from "./messagesSaga";
import { getFon } from "./fonSaga";
import { chengeAuthor } from "./profileSaga";
import {
  onAuthStateChanged,
  singInSaga,
  singUpSaga,
} from "./authSaga";
import { delliteCats, handleInitFirebaseChats, onAddChats } from "./chatsSaga";
import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION, GET_CHAT_FIREBASE_ACTION } from "../Chats/constants";

export function* sagaWatcher() {
  yield takeEvery(ADD_MESSAGE_ACTION, onAddMessage);
  yield takeEvery(GET_FON_REQUEST, getFon);
  yield takeEvery(SIGN_IN_ACTION, singInSaga);
  yield takeEvery(SIGN_UP_ACTION, singUpSaga);
  yield takeEvery(CHENGE_AUTH_ACTION, onAuthStateChanged);
  yield takeEvery(CHENGE_FIREBASE_NAME_ACTION, chengeAuthor);
  yield takeEvery(GET_MESSAGES_FIREBASE_ACTION, handleInitFirebaseMessages);
  yield takeEvery(ADD_CHAT_ACTION, onAddChats);
  yield takeEvery(DELETE_CHAT_ACTION, delliteCats)
  yield takeEvery(GET_CHAT_FIREBASE_ACTION, handleInitFirebaseChats)
}
