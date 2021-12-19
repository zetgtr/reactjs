import { v4 as uuidv4 } from "uuid";
import { ADD_MESSAGE_SAGA } from "../sagas/constants";

import { DELETE_CHAT_MESSAGES_ACTION } from "./constants";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_SAGA: {
      const { chatId, textMessage, name, chatClass } = action.payload;
      const chatMessages = state.messageList[chatId] ?? [];
      const now = new Date();
      return {
        ...state,
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
      const { [chatId]: chatToDelete, ...restChats } = state.messageList;
      return { ...state, messageList: { ...restChats } };
    }
    default:
      return state;
  }
};
