import axios, {AxiosResponse} from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {fetchMarketFailure, fetchMarketSuccess} from "./actions";
import {marketTypes} from "./marketTypes";
import {IMarketResponse} from "../../contracts/market-response";
import {IMarketRequest} from "../../contracts/market-request";
import {buildMarket} from "../../utils/market";

const getMarket = (request: IMarketRequest) => {
    return axios.get<IMarketResponse>(`data/response-${request.args.days}.json`)
};

function* fetchMarketSaga(action: any) {
    try {
        const response: AxiosResponse<IMarketResponse> = yield call(getMarket, action.payload.request as IMarketRequest);
        const market = buildMarket(response.data)
        yield put(
            fetchMarketSuccess({
                market
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
