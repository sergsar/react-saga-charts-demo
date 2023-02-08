import axios, {AxiosResponse} from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {fetchMarketFailure, fetchMarketSuccess} from "./actions";
import {marketTypes} from "./marketTypes";
import {IMarketResponse} from "../../contracts/market-response";
import {IMarketRequest} from "../../contracts/market-request";

const getMarket = (request?: IMarketRequest) => {
    console.log('request::', request)
    return axios.get<IMarketResponse>('data/response.json')
};

function* fetchMarketSaga(action: any) {
    try {
        const response: AxiosResponse = yield call(getMarket, action.payload.request as IMarketRequest);
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
