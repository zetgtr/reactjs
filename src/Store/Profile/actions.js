import {
  CHENGE_AUTHOR_ACTION,
  TOGGLE_USER_NAME_ACTION,
} from "./constants";

export const toggleUserNameAction = () => ({
  type: TOGGLE_USER_NAME_ACTION,
});

export const chengeAuthorAction = (payload) => ({
  type: CHENGE_AUTHOR_ACTION,
  payload,
});
