import {marketTypes} from "./marketTypes"
import {IMarketResponse} from "../../contracts/market-response";
import {IMarketRequest} from "../../contracts/market-request";

export interface MarketState {
    pending: boolean;
    market: IMarketResponse | null;
    error: string | null;
}

export interface FetchMarketRequestPayload {
    request: IMarketRequest;
}

export interface FetchMarketSuccessPayload {
    market: IMarketResponse[];
}

export interface FetchMarketFailurePayload {
    error: string;
}

export interface FetchMarketRequest {
    type: typeof marketTypes.FETCH_MARKET_REQUEST;
    payload: FetchMarketRequestPayload;
}

export type FetchMarketSuccess = {
    type: typeof marketTypes.FETCH_MARKET_SUCCESS;
    payload: FetchMarketSuccessPayload;
};

export type FetchMarketFailure = {
    type: typeof marketTypes.FETCH_MARKET_FAILURE;
    payload: FetchMarketFailurePayload;
};

export type MarketActions =
    | FetchMarketRequest
    | FetchMarketSuccess
    | FetchMarketFailure;
