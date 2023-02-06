import axios, {AxiosResponse} from "axios";
import {IMarketResponse} from "./types";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {fetchMarketFailure, fetchMarketSuccess} from "./actions";
import {marketTypes} from "./marketTypes";

const getMarket = () => axios.get<IMarketResponse>('data/response.json');

function* fetchMarketSaga() {
    try {
        const response: AxiosResponse = yield call(getMarket);
        yield put(
            fetchMarketSuccess({
                market: response.data
            })
        )
    } catch (e: any) {
        yield put(
            fetchMarketFailure({
                error: e.message
            })
        )
    }
}

function* marketSaga() {
    yield all([takeLatest(marketTypes.FETCH_MARKET_REQUEST, fetchMarketSaga)]);
}

export default marketSaga;
