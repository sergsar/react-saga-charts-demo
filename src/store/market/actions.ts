import {
    FetchMarketFailure,
    FetchMarketFailurePayload,
    FetchMarketRequest,
    FetchMarketSuccess,
    FetchMarketSuccessPayload
} from "./types";
import {marketTypes} from "./marketTypes";

export const fetchMarketRequest = (): FetchMarketRequest => ({
    type: marketTypes.FETCH_MARKET_REQUEST
});

export const fetchMarketSuccess = (
    payload: FetchMarketSuccessPayload
): FetchMarketSuccess => ({
    type: marketTypes.FETCH_MARKET_SUCCESS,
    payload
});

export const fetchMarketFailure = (
    payload: FetchMarketFailurePayload
): FetchMarketFailure => ({
    type: marketTypes.FETCH_MARKET_FAILURE,
    payload
});
