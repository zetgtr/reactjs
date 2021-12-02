import { v4 as uuidv4 } from "uuid";
import { ADD_CHAT_ACTION, DEL_CHAT_ACTION } from "./constants";

const initialState = {
  chatList: [{ id: uuidv4(), name: "Бот", chatId: "id1"}],
  chatId: 1
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      state.chatId = state.chatId + 1
      return {
        ...state,
        chatList: [
          ...state.chatList,
          { id: uuidv4(), name: action.payload.chatName, chatId: 'id' + state.chatId },
        ],
      };
    }
    case DEL_CHAT_ACTION: {
      let delChat = state.chatList.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        chatList: delChat,
      };
    }
    default:
      return state;
  }
};
