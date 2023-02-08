import React from "react";
import {LineChart as RechartsLineChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import "./chart.css";
import {IChartData} from "../models/chart-data";
import clsx from "clsx";

interface LineChartProps {
    data: IChartData[];
    title: string;
    className?: string;
}

const LineChart: React.FC<LineChartProps> = ({ data, title, className }) => {

    const grid = true

    const dataKey = 'value'
    return (
        <div className={clsx('chart', className)}>
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <RechartsLineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis dataKey={dataKey} />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </RechartsLineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChart;
