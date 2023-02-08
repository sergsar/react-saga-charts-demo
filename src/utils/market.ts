import {IMarketResponse, IMarketSection, IMarketSectionElement} from "../contracts/market-response";
import {IMarket, IMarketCharts} from "../models/market";
import {getMarketTables} from "./market-tables";
import {
    getCategoriesChartData,
    getPaymentsChartData,
    getSalesPerHourChartData,
    getWaitersChartData
} from "./charts-data";

export const buildMarket = (response: IMarketResponse): IMarket => {
    const elements = response ? getMarketElements(response) : [];
    const tables = getMarketTables(elements);
    const charts: IMarketCharts = {
        waiters: getWaitersChartData(tables[3]),
        salesPerHour: getSalesPerHourChartData(tables[2]),
        payments: getPaymentsChartData(tables[0]),
        categories: getCategoriesChartData(tables[1])
    }
    return {
        charts
    }
}

const getMarketElements = (response: IMarketResponse): IMarketSectionElement[] => {
    return response.sections.reduce(
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
