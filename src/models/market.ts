import {IChartData} from "./chart-data";

export interface IMarket {
    charts: IMarketCharts;
}

export interface IMarketCharts {
    waiters: IChartData[];
    salesPerHour: IChartData[];
    payments: IChartData[];
    categories: IChartData[];
}
