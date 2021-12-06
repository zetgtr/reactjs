import {
  ADD_MESSAGE_ACTION,
  DEL_MESSAGE_ACTION,
} from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const delMessageAction = (payload) => ({
  type: DEL_MESSAGE_ACTION,
  payload,
});
