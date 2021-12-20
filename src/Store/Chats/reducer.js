import { ADD_CHAT_SAGA } from "../sagas/constants";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_SAGA: {
      const  payload  = action.payload;
      const keysChat = Object.keys(payload)
      const chats = Object.values(payload)
      for(let i=0;i<chats.length;i++){
        chats[i]["firebaseIdChat"] = keysChat[i]
      }
      return {
        ...state,
        chatList: {...state.chatList, chats }
      };
    }
    default:
      return state;
  }
};
