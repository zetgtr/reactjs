import { HENDLE_CHENGE_AUTHOR_ACTION, TOGGLE_USER_NAME_ACTION } from "./constants";

export const toggleUserNameAction = () => ({
  type: TOGGLE_USER_NAME_ACTION,
});

export const hendleChengeAuthorAction = (textName) => ({
  textName: textName,
  type: HENDLE_CHENGE_AUTHOR_ACTION
});
