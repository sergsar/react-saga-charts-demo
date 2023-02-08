import React, {useEffect, useMemo} from "react";
import LineChart from "./LineChart";
import {IMarketRequest} from "../contracts/market-request";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {fetchMarketRequest} from "../store/market/actions";
import {IMarketResponse} from "../contracts/market-response";
import {getMarketElements} from "../utils/market";
import {getMarketTables} from "../utils/market-tables";
import PieChart from "./PieChart";
import {
    getSalesPerHourChartData,
    getPaymentsChartData,
    getWaitersChartData,
    getCategoriesChartData
} from "../utils/charts-data";
import BarChart from "./BarChart";
import './dashboardCharts.css'

const chartParams: IMarketRequest = {
    elements: [
        {
            path: 'air.dailyPayments',
            fields: ['total'],
            refs: [['id_payment', 'name'], ['id_payment', 'ml_name']]
        },
        {
            path: 'air.dailyCategories',
            fields: ['total'],
            refs: [['id_category', 'name']]
        },
        {
            path: 'air.hourlySales',
            fields: ['hour', 'count', 'total']
        },
        {
            path: 'air.dailyWaiters',
            fields: ['total', 'count'],
            refs:[['id_waiter', 'name']]
        }
    ],
    args: { days: '20220128' },
    orderBy: [{ field: 'day' }]
}

const DashboardCharts: React.FC<{}> = (props: any) => {
    const dispatch = useDispatch();

    const { market }: { market: IMarketResponse } = useSelector(
        (state: RootState) => state.market
    )

    useEffect(() => {
        dispatch(fetchMarketRequest({ request: chartParams }))
    }, []);

    const {
        waitersChartData,
        salesPerHourChartData,
        paymentsChartData,
        categoriesChartData
    } = useMemo(() => {
        const elements = market ? getMarketElements(market) : []
        console.log('elements: ', elements)

        const tables = getMarketTables(elements)
        console.log('tables', tables)

        return {
            waitersChartData: getWaitersChartData(tables[3]),
            salesPerHourChartData: getSalesPerHourChartData(tables[2]),
            paymentsChartData: getPaymentsChartData(tables[0]),
            categoriesChartData: getCategoriesChartData(tables[1])
        }
    }, [market])

    return (
        <div className="dashboard-charts">
            <BarChart className="dashboard-chart" data={waitersChartData} title="Top waiters" />
            <LineChart className="dashboard-chart" data={salesPerHourChartData} title="Sales per hour" />
            <PieChart className="dashboard-chart"  data={paymentsChartData} title="Payments" />
            <BarChart className="dashboard-chart" data={categoriesChartData} title="Top waiters" />
        </div>
    )
}

export default DashboardCharts;
