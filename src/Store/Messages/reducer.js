import {
  GET_MESSAGES_FIREBASE_SAGA,
} from "../sagas/constants";

import { DELETE_CHAT_MESSAGES_ACTION } from "./constants";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_FIREBASE_SAGA: {
      const { chatId, messages } = action.payload.payload
      return { ...state,
        messageList: {
          ...state.messageList,
          [chatId]: messages,
        }
      };
    }
    default:
      return state;
  }
};
