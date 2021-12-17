// import { delay, put } from "@redux-saga/core/effects";
// import faker from "faker/locale/ru";

// import { ADD_MESSAGE_SAGA } from "./constants";

// export function* addMessage({ payload }) {
//   yield put({
//     type: ADD_MESSAGE_SAGA,
//     payload,
//   });
//   yield delay(1500);
//   yield put({
//     type: ADD_MESSAGE_SAGA,
//     payload: {
//       chatId: payload.chatId,
//       name: "Бот",
//       chatClass: "bot",
//       textMessage: faker.lorem.text(),
//     },
//   });
// }
