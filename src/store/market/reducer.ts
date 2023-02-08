import { marketTypes } from './marketTypes'
import { MarketActions, MarketState } from './types'

const initialState: MarketState = {
  pending: false,
  market: null,
  error: null
}

const reducers = (state = initialState, action: MarketActions) => {
  switch (action.type) {
    case marketTypes.FETCH_MARKET_REQUEST:
      return {
        ...state,
        pending: true
      }
    case marketTypes.FETCH_MARKET_SUCCESS:
      return {
        ...state,
        pending: false,
        market: action.payload.market,
        error: null
      }
    case marketTypes.FETCH_MARKET_FAILURE:
      return {
        ...state,
        pending: false,
        market: null,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}

export default reducers
