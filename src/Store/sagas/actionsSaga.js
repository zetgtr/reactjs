import {
  ADD_CHAT_SAGA,
  CHENGE_AUTH_USER_SAGA,
  CHENGE_LOADING_SAGA,
  ERROR_FIREBASE_SAGA,
  GET_FON_LOADING_SAGA,
  GET_MESSAGES_FIREBASE_SAGA,
} from "./constants";

export const chengeAuthActionSaga = (payload) => ({
  type: CHENGE_AUTH_USER_SAGA,
  payload,
});

export const chengeLoadingActionSaga = () => ({
  type: CHENGE_LOADING_SAGA,
});

export const chengeErrorFirebaseActionSaga = (payload) => ({
  type: ERROR_FIREBASE_SAGA,
  payload,
});
export const getMessagesFirebaseActionSaga = (payload) => ({
  type: GET_MESSAGES_FIREBASE_SAGA,
  payload,
});
export const addChatActionSaga = (payload) => ({
  type: ADD_CHAT_SAGA,
  payload,
});

export const getFonLoadingActionSaga = () => ({
  type: GET_FON_LOADING_SAGA,
});