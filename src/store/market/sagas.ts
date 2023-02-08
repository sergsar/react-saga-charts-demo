import axios, { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { IMarketRequest } from '../../contracts/market-request'
import { IMarketResponse } from '../../contracts/market-response'
import { buildMarket } from '../../utils/market'
import { fetchMarketFailure, fetchMarketSuccess } from './actions'
import { marketTypes } from './marketTypes'
import { FetchMarketRequest } from './types'

const getMarket = (request: IMarketRequest) => {
  return axios.get<IMarketResponse>(`data/response-${request.args.days}.json`)
}

function* fetchMarketSaga(action: FetchMarketRequest) {
  try {
    const response: AxiosResponse<IMarketResponse> = yield call(
      getMarket,
      action.payload.request
    )
    const market = buildMarket(response.data)
    yield put(
      fetchMarketSuccess({
        market
      })
    )
  } catch (e: unknown) {
    yield put(
      fetchMarketFailure({
        error: (e as Error)?.message
      })
    )
  }
}

function* marketSaga() {
  yield all([takeLatest(marketTypes.FETCH_MARKET_REQUEST, fetchMarketSaga)])
}

export default marketSaga
