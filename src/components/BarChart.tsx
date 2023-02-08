import clsx from 'clsx'
import millify from 'millify'
import React from 'react'
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { CHART_ASPECT } from '../consts/charts'
import { IChartData } from '../models/chart-data'

interface BarChartProps {
  data: IChartData[]
  title: string
  className?: string
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  className
}) => {
  const grid = true
  const dataKey = 'value'
  return (
    <div className={clsx('chart', className)}>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={CHART_ASPECT}>
        <RechartsBarChart data={data} layout="vertical">
          <XAxis type="number" tickFormatter={(value) => millify(value)} />
          <YAxis type="category" dataKey="name" />
          <Bar dataKey={dataKey} fill="#5550bd" />
          <Tooltip
            formatter={(value) => millify(+value)}
            cursor={{ fill: 'transparent' }}
          />
          {grid && (
            <CartesianGrid
              horizontal={false}
              stroke="#e0dfdf"
              strokeDasharray="5 5"
            />
          )}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart
