import { call, put, take } from "redux-saga/effects";
import { reduxSagaFirebase } from "../../Services/firebase";
import {
  chengeAuthActionSaga,
  chengeErrorFirebaseActionSaga,
  chengeLoadingActionSaga,
} from "./actionsSaga";
import { handleInitFirebaseProfile } from "./profileSaga";


export function* singInSaga ({ payload }) {
    try {
      const user = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, payload.email, payload.password);
      yield put(chengeAuthActionSaga(user));
      yield put(chengeErrorFirebaseActionSaga(""))
    }
    catch(error) {
      yield put(chengeErrorFirebaseActionSaga(error.message));
    }
};

export function* singUpSaga({ payload }) {
  try {
    yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, payload.email, payload.password);
    yield put(chengeErrorFirebaseActionSaga(""))
  }
  catch(error) {
    yield put(chengeErrorFirebaseActionSaga(error.message));
  }
};

export function* onAuthStateChanged() {
  const channel = yield call(reduxSagaFirebase.auth.channel);
  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put(chengeAuthActionSaga(user));
      yield handleInitFirebaseProfile();
    } else {
      yield put(chengeAuthActionSaga(null));
      yield put(chengeLoadingActionSaga());
    }
  }
}