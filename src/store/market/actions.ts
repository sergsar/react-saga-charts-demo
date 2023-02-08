import { marketTypes } from './marketTypes'
import {
  FetchMarketFailure,
  FetchMarketFailurePayload,
  FetchMarketRequest,
  FetchMarketRequestPayload,
  FetchMarketSuccess,
  FetchMarketSuccessPayload
} from './types'

export const fetchMarketRequest = (
  payload: FetchMarketRequestPayload
): FetchMarketRequest => ({
  type: marketTypes.FETCH_MARKET_REQUEST,
  payload
})

export const fetchMarketSuccess = (
  payload: FetchMarketSuccessPayload
): FetchMarketSuccess => ({
  type: marketTypes.FETCH_MARKET_SUCCESS,
  payload
})

export const fetchMarketFailure = (
  payload: FetchMarketFailurePayload
): FetchMarketFailure => ({
  type: marketTypes.FETCH_MARKET_FAILURE,
  payload
})
