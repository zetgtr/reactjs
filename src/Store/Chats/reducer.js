import { ADD_CHAT_SAGA } from "../sagas/constants";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_SAGA: {
      const { chats } = action.payload.payload;
      return {
        ...state,
        chatList: {...state.chatList,["list"]: chats },
      };
    }
    default:
      return state;
  }
};
