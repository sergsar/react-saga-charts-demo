import './chart.css'

import clsx from 'clsx'
import millify from 'millify'
import React from 'react'
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { CHART_ASPECT } from '../consts/charts'
import { IChartData } from '../models/chart-data'

interface LineChartProps {
  data: IChartData[]
  title: string
  className?: string
}

const LineChart: React.FC<LineChartProps> = ({ data, title, className }) => {
  const grid = true

  const dataKey = 'value'
  return (
    <div className={clsx('chart', className)}>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={CHART_ASPECT}>
        <RechartsLineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => millify(value)} dataKey={dataKey} />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip formatter={(value) => millify(+value)} />
          {grid && (
            <CartesianGrid
              vertical={false}
              stroke="#e0dfdf"
              strokeDasharray="5 5"
            />
          )}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart
