import { CHENGE_AUTHOR_ACTION } from "./constants";

const initialState = {
  name: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
