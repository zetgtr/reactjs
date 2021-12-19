import { v4 as uuidv4 } from "uuid";
import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

const initialState = {
  chatList: [{ id: uuidv4(), name: "Бот"}],
};



export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          { id: uuidv4(), name: action.payload.chatName },
        ],
      };
    }
    case DELETE_CHAT_ACTION: {
      const filteredChats = state.chatList.filter(
        (item) => item.id !== action.payload.id
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
