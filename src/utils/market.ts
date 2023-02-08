import {IMarketResponse, IMarketSection, IMarketSectionElement} from "../contracts/market-response";

export const getMarketElements = (market: IMarketResponse): IMarketSectionElement[] => {
    return market.sections.reduce(
        (acc: IMarketSectionElement[], curr: IMarketSection) => [
            ...acc,
            ...reduceInnerItems(curr.elements)
        ],
        []
    )
}

const reduceInnerItems = <T>(items: T[][]): T[] => {
    return items.reduce((acc, curr) => [...acc, ...curr], [])
}
