import { HENDLE_CHENGE_AUTHOR_ACTION, TOGGLE_USER_NAME_ACTION } from "./constants";

const initialState = {
  showName: false,
  name: "",
};

export const profileReducer = (state = initialState, action) => {
    console.log(action.type)
  switch (action.type) {
    case TOGGLE_USER_NAME_ACTION: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case HENDLE_CHENGE_AUTHOR_ACTION: {
        return {
            ...state,
            name: action.textName
        }
    }
    default:
      return state;
  }
};
