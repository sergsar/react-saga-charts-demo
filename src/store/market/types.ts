import {marketTypes} from "./marketTypes"

export interface IMarketResponse {
    sections: IMarketSection[]
}

export interface IMarketSection {
    elements: IMarketSectionElement[][]
}

export interface IMarketSectionElement {

}

export interface MarketState {
    pending: boolean;
    market: IMarketResponse | null;
    error: string | null;
}

export interface FetchMarketSuccessPayload {
    market: IMarketResponse[];
}

export interface FetchMarketFailurePayload {
    error: string;
}

export interface FetchMarketRequest {
    type: typeof marketTypes.FETCH_MARKET_REQUEST;
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
