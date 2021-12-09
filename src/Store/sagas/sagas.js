import { takeEvery } from "redux-saga/effects";
import { ADD_MESSAGE_ACTION } from "../Messages/constants";
import { GET_FON_REQUEST } from "../Settings/constants";
import { addMessage } from "./addMessage";
import { getFon } from "./getFon";

export function* sagaWatcher() {
  yield takeEvery(ADD_MESSAGE_ACTION, addMessage);
  yield takeEvery(GET_FON_REQUEST, getFon);
}
