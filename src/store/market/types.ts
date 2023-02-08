import { IMarketRequest } from '../../contracts/market-request'
import { IMarket } from '../../models/market'
import { marketTypes } from './marketTypes'

export interface MarketState {
  pending: boolean
  market: IMarket | null
  error: string | null
}

export interface FetchMarketRequestPayload {
  request: IMarketRequest
}

export interface FetchMarketSuccessPayload {
  market: IMarket
}

export interface FetchMarketFailurePayload {
  error: string
}

export interface FetchMarketRequest {
  type: typeof marketTypes.FETCH_MARKET_REQUEST
  payload: FetchMarketRequestPayload
}

export type FetchMarketSuccess = {
  type: typeof marketTypes.FETCH_MARKET_SUCCESS
  payload: FetchMarketSuccessPayload
}

export type FetchMarketFailure = {
  type: typeof marketTypes.FETCH_MARKET_FAILURE
  payload: FetchMarketFailurePayload
}

export type MarketActions =
  | FetchMarketRequest
  | FetchMarketSuccess
  | FetchMarketFailure
