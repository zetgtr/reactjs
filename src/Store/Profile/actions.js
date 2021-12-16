import {
  CHENGE_AUTHOR_ACTION,
  CHENGE_FIREBASE_NAME_ACTION,
  GET_FIREBASE_NAME_ACTION,
} from "./constants";

export const chengeAuthorAction = (payload) => ({
  type: CHENGE_AUTHOR_ACTION,
  payload,
});

export const changeFirebaseNameAction = (payload) => ({
  type: CHENGE_FIREBASE_NAME_ACTION,
  payload,
});

export const getFirebaseNameAction = () => ({
  type: GET_FIREBASE_NAME_ACTION
})
