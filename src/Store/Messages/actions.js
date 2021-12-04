import faker from "faker/locale/ru";

import {
  ADD_MESSAGE_ACTION,
  DEL_MESSAGE_ACTION,
} from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const delMessageAction = (payload) => ({
  type: DEL_MESSAGE_ACTION,
  payload,
});

export const addMessageWithThink = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));
   if (payload.name !== "Бот") {
    setTimeout(() => {
      dispatch(
        addMessageAction({
          chatId: payload.chatId,
          name: "Бот",
          chatClass: "bot",
          textMessage: faker.lorem.text(),
        })
      );
    }, 1500);
  }
};
