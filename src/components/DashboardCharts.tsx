import './dashboardCharts.css'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DATES } from '../consts/dates'
import { fetchMarketRequest } from '../store/market/actions'
import { MarketState } from '../store/market/types'
import { RootState } from '../store/rootReducer'
import { getMarketRequest } from '../utils/market-request'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'

const DashboardCharts: React.FC = () => {
  const dispatch = useDispatch()

  const { market }: MarketState = useSelector(
    (state: RootState) => state.market
  )

  useEffect(() => {
    const chartParams = getMarketRequest(DATES[0].value)
    dispatch(fetchMarketRequest({ request: chartParams }))
  }, [])

  if (market) {
    const { waiters, salesPerHour, payments, categories } = market.charts
    return (
      <div className="dashboard-charts">
        <BarChart
          className="dashboard-chart"
          data={waiters}
          title="Top waiters"
        />
        <LineChart
          className="dashboard-chart"
          data={salesPerHour}
          title="Sales per hour"
        />
        <PieChart
          className="dashboard-chart"
          data={payments}
          title="Payments"
        />
        <BarChart
          className="dashboard-chart"
          data={categories}
          title="Top waiters"
        />
      </div>
    )
  }
  return <></>
}

export default DashboardCharts
