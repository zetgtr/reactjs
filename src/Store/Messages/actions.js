import {
  ADD_MESSAGE_ACTION,
  DELETE_CHAT_MESSAGES_ACTION,
} from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const delMessageAction = (payload) => ({
  type: DELETE_CHAT_MESSAGES_ACTION,
  payload,
});
