import { v4 as uuidv4 } from "uuid";
import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

const initialState = {
  chatList: [{ id: uuidv4(), name: "Бот", chatId: "id1"}],
  chatId: 1,
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
    case DELETE_CHAT_ACTION: {
      const filteredChats = state.chatList.filter(
        (item) => item.chatId !== action.payload.chatId
      );
      return {
        ...state,
        chatList: filteredChats,
      };
    }
    default:
      return state;
  }
};
