import { v4 as uuidv4 } from "uuid";
import imgStockFon from "../../img/MessageFon.jpg";

import {
  FON_ERROR_SAGA,
  FON_SEARCH_SAGA,
  GET_FON_LOADING_SAGA,
} from "../sagas/constants";
import {
  ADD_FON_FAVORITES,
  ADD_FON_SETTING,
  DELLITE_FON_FAVORITES,
  DELLITE_FON_FULL_FAVORITES,
} from "./constants";

const initialState = {
  fonSearchUrl: undefined,
  favorites: [{ id: uuidv4(), urlFull: imgStockFon, urlSmall: imgStockFon }],
  fon: {url: imgStockFon},
  loading: false,
  error: false,
};

export const fonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FON_LOADING_SAGA: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case FON_SEARCH_SAGA: {
      return {
        ...state,
        loading: false,
        fonSearchUrl: action.payload,
      };
    }
    case FON_ERROR_SAGA: {
      return {
        ...state,
        loading: false,
        error: true,
        fonSearchUrl: imgStockFon,
      };
    }
    case ADD_FON_FAVORITES: {
      return {
        ...state,
        favorites: [
          ...state.favorites,
          {
            id: uuidv4(),
            urlFull: state.fonSearchUrl?.urls.full,
            urlSmall: state.fonSearchUrl?.urls.small,
          },
        ],
      };
    }
    case ADD_FON_SETTING: {
      return {
        ...state,
        fon: action.payload,
      };
    }
    case DELLITE_FON_FAVORITES: {
      const filteredFavorites = state.favorites.filter(
        (item) => item.urlFull !== action.payload.url.url
      );
      return {
        ...state,
        favorites: filteredFavorites,
      };
    }
    case DELLITE_FON_FULL_FAVORITES: {
      return {
        ...state,
        favorites: [],
      };
    }
    default:
      return state;
  }
};
