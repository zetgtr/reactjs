import { chengeAuthActionSaga, chengeErrorFirebaseActionSaga, chengeLoadingActionSaga } from "../../sagas/actionsSaga";
import { chengeEmailAction, chengePasswordAction } from "../actions";
import {authReducer} from "../reducer"

describe("test reducer component", () => {
  it("find 'loading false'", () => {
    const expected = {"auth": undefined, "email": "", "error": "", "loading": false, "password": ""}
    const received = authReducer(undefined, chengeLoadingActionSaga())
    expect(received).toEqual(expected);
  });
  it("find 'email' text", () => {
    const expected = {"auth": undefined, "email": "qwerty@gmail.com", "error": "", "loading": true, "password": ""}
    const received = authReducer(undefined, chengeEmailAction("qwerty@gmail.com"))
    expect(received).toEqual(expected);
  });
  it("find 'password' text", () => {
    const expected = {"auth": undefined, "email": "", "error": "", "loading": true, "password": "qwerty"}
    const received = authReducer(undefined, chengePasswordAction("qwerty"))
    expect(received).toEqual(expected);
  });
  it("find 'error' text", () => {
    const expected = {"auth": undefined, "email": "", "error": "qwerty", "loading": true, "password": ""}
    const received = authReducer(undefined, chengeErrorFirebaseActionSaga("qwerty"))
    expect(received).toEqual(expected);
  });
  it("find 'error' text", () => {
    const expected = {"auth": "qwerty", "email": "", "error": "", "loading": true, "password": ""}
    const received = authReducer(undefined, chengeAuthActionSaga("qwerty"))
    expect(received).toEqual(expected);
  });
});