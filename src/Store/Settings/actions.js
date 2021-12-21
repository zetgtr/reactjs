import {
  ADD_FON_FAVORITES,
  ADD_FON_SETTING,
  DELLITE_FON_FAVORITES,
  DELLITE_FON_FULL_FAVORITES,
  GET_FON_REQUEST,
} from "./constants";

export const getDogRequestAction = () => ({
  type: GET_FON_REQUEST,
});

export const addFavoritesAction = () => ({
  type: ADD_FON_FAVORITES,
});
export const addFonAction = (payload) => ({
  type: ADD_FON_SETTING,
  payload,
});
export const delliteFonAction = (payload) => ({
  type: DELLITE_FON_FAVORITES,
  payload,
});
export const delliteFullFavoritesAction = () => ({
  type: DELLITE_FON_FULL_FAVORITES,
});
