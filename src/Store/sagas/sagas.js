import faker from "faker/locale/ru";
import { takeEvery, delay, put } from "redux-saga/effects";
import { ADD_MESSAGE_ACTION } from "../Messages/constants";
import { ADD_MESSAGE_SAGA } from "./constants";

export function* sagaWatcher() {
  yield takeEvery(ADD_MESSAGE_ACTION, addMessage);
}

function* addMessage({ payload }) {
  yield put({
    type: ADD_MESSAGE_SAGA,
    payload,
  });
  yield delay(1500);
  yield put({
    type: ADD_MESSAGE_SAGA,
    payload: {
      chatId: payload.chatId,
      name: "Бот",
      chatClass: "bot",
      textMessage: faker.lorem.text(),
    },
  });
}
