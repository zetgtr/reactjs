import { v4 as uuidv4 } from "uuid";
import { ADD_MESSAGE_SAGA } from "../sagas/constants";

import {
  DELETE_CHAT_MESSAGES_ACTION
} from "./constants";

const initialState = {
  messageList: {},
  messageLast: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_SAGA: {
      const { chatId, textMessage, name, chatClass } = action.payload;
      const chatMessages = state.messageList[chatId] ?? [];
      const now = new Date();
      return {
        ...state,
        messageLast: { ...state.messageLast, [chatId]: textMessage },
        messageList: {
          ...state.messageList,
          [chatId]: [
            ...chatMessages,
            {
              id: uuidv4(),
              chatClass,
              textMessage,
              name,
              data: now.getHours() + ":" + now.getMinutes(),
            },
          ],
        },
      };
    }
    case DELETE_CHAT_MESSAGES_ACTION: {
      const { chatId } = action.payload;
      let filterMessageList = Object.fromEntries(
        Object.entries(state.messageList).filter((id) => id[0] !== chatId)
      );
      let filterMessageLast = Object.fromEntries(
        Object.entries(state.messageLast).filter((id) => id[0] !== chatId)
      );
      return {
        ...state,
        messageList: filterMessageList,
        messageLast: filterMessageLast,
      };
    }
    default:
      return state;
  }
};
