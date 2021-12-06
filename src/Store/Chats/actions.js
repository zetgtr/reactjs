import { ADD_CHAT_ACTION, DEL_CHAT_ACTION } from "./constants";

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});

export const delChatAction = (payload) => ({
  type: DEL_CHAT_ACTION,
  payload,
});
