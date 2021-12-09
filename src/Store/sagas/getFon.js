import { put } from "redux-saga/effects";
import { FON_URL } from "../../Api";
import {
  FON_ERROR_SAGA,
  FON_SEARCH_SAGA,
  GET_FON_LOADING_SAGA,
} from "./constants";

export function* getFon() {
  yield put({ type: GET_FON_LOADING_SAGA });
  const data = yield getFetchFon();
  yield put(data);
}

const getFetchFon = async () => {
  try {
    const response = await fetch(FON_URL);
    if (!response.ok) {
      throw new Error(`error getting data with status`);
    }
    const result = await response.json();
    return { type: FON_SEARCH_SAGA, payload: result };
  } catch (error) {
    return { type: FON_ERROR_SAGA };
  }
};
