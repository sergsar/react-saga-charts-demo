import React, {useEffect} from "react";
import LineChart from "./LineChart";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {fetchMarketRequest} from "../store/market/actions";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import './dashboardCharts.css'
import {MarketState} from "../store/market/types";
import {getMarketRequest} from "../utils/market-request";
import {DATES} from "../consts/dates";

const DashboardCharts: React.FC<{}> = (props: any) => {
    const dispatch = useDispatch();

    const { market }: MarketState = useSelector(
        (state: RootState) => state.market
    )

    useEffect(() => {
        const chartParams = getMarketRequest(DATES[0].value)
        dispatch(fetchMarketRequest({ request: chartParams }))
    }, []);

    if (market) {
        const { waiters, salesPerHour, payments, categories } = market.charts;
        return (
            <div className="dashboard-charts">
                <BarChart className="dashboard-chart" data={waiters} title="Top waiters" />
                <LineChart className="dashboard-chart" data={salesPerHour} title="Sales per hour" />
                <PieChart className="dashboard-chart"  data={payments} title="Payments" />
                <BarChart className="dashboard-chart" data={categories} title="Top waiters" />
            </div>
        )
    }
    return <></>
}

export default DashboardCharts;
