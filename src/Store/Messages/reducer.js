import { v4 as uuidv4 } from "uuid";

import { ADD_MESSAGE_ACTION, ADD_MESSAGE_BOT_ACTION, DEL_MESSAGE_ACTION } from "./constants";

const initialState = {
  messageList: {},
  messageLast: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const { chatId, textMessage, name } = action.payload;
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
              class: "human",
              textMessage,
              name,
              data: now.getHours() + ":" + now.getMinutes(),
            },
          ],
        },
      };
    }
    case ADD_MESSAGE_BOT_ACTION: {
      const { chatId } = action.payload;
      const now = new Date();
      let textBot = "Привет"
      console.log(chatId)
      return {
        ...state,
        messageLast: { ...state.messageLast, [chatId]: textBot },
        messageList: {
          ...state.messageList,
          [chatId]: [
            ...state.messageList[chatId],
            {
              id: uuidv4(),
              class: "bot",
              textMessage: textBot,
              name: "Бот",
              data: now.getHours() + ":" + now.getMinutes(),
            },
          ],
        },
      };
    }
    case DEL_MESSAGE_ACTION: {
      const { chatId } = action.payload;
      delete state.messageList[chatId];
      delete state.messageLast[chatId];
      return state;
    }
    default:
      return state;
  }
};
