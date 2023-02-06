import { all, fork } from "redux-saga/effects";
import marketSaga from "./market/sagas";

export function* rootSaga() {
    yield all([fork(marketSaga)]);
}
