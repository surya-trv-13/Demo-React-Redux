import { all, fork } from "redux-saga/effects";
import * as getApiSaga from "./getApiSaga";

export default function* rootSaga() {
  yield all([...Object.values(getApiSaga)].map(fork));
}
