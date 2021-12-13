import { takeEvery } from "redux-saga/effects";
import {
  CHENGE_AUTH_ACTION,
  SIGN_IN_ACTION,
  SIGN_UP_ACTION,
} from "../Auth/constants";
import { ADD_MESSAGE_ACTION } from "../Messages/constants";
import { GET_FON_REQUEST } from "../Settings/constants";
import { addMessage } from "./addMessage";
import { getFon } from "./getFon";
import { authSaga, singInSaga, singUpSaga } from "./singInSaga";

export function* sagaWatcher() {
  yield takeEvery(ADD_MESSAGE_ACTION, addMessage);
  yield takeEvery(GET_FON_REQUEST, getFon);
  yield takeEvery(SIGN_IN_ACTION, singInSaga);
  yield takeEvery(SIGN_UP_ACTION, singUpSaga);
  yield takeEvery(CHENGE_AUTH_ACTION, authSaga);
}
