import { takeLatest, put, call } from "redux-saga/effects";
import { BUTTON_CLICK } from "../actions/actionTypes";
import {
  setApiSuccess,
  setApiFailure,
  setApiStart
} from "../actions/getApiDataAction";
import { getData } from "../services";

// handler
function* handleApiStart(action) {
  try {
    const id = action.payload;

    yield put(setApiStart());
    const value = yield call(getData, id);
    console.log("Payload", value.data);
    yield put(setApiSuccess(value.data));
  } catch (error) {
    yield put(setApiFailure(error));
  }
}

// watcher
export function* watchApiStart() {
  yield takeLatest(BUTTON_CLICK, handleApiStart);
}
