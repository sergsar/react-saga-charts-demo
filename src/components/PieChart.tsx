import './chart.css'

import clsx from 'clsx'
import millify from 'millify'
import React from 'react'
import {
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

import { CHART_ASPECT } from '../consts/charts'
import { IChartData } from '../models/chart-data'

interface PieChartProps {
  data: IChartData[]
  title: string
  className?: string
}

const PieChart: React.FC<PieChartProps> = ({ data, title, className }) => {
  return (
    <div className={clsx('chart', className)}>
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={CHART_ASPECT}>
        <RechartsPieChart>
          <Pie data={data} dataKey="value" nameKey="name" />
          <Tooltip formatter={(value) => millify(+value)} />
          <Legend layout="vertical" verticalAlign="middle" align="left" />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChart
