import { CHENGE_AUTHOR_ACTION, TOGGLE_USER_NAME_ACTION } from "./constants";

const initialState = {
  showName: false,
  name: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_NAME_ACTION: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case CHENGE_AUTHOR_ACTION: {
        return {
            ...state,
            name: action.payload
        }
    }
    default:
      return state;
  }
};
