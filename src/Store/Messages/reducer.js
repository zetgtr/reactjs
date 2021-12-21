import {
  GET_MESSAGES_FIREBASE_SAGA,
} from "../sagas/constants";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_FIREBASE_SAGA: {
      const { chatId, messages } = action.payload
      const textMessages = Object.values(messages)
      return { ...state,
        messageList: {
          ...state.messageList,
          [chatId]: textMessages,
        }
      };
    }
    default:
      return state;
  }
};
