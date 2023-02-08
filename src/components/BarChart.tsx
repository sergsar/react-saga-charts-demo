import React from "react";
import {CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar} from "recharts";
import {BarChart as RechartsBarChart} from "recharts";
import {IChartData} from "../models/chart-data";
import clsx from "clsx";

interface BarChartProps {
    data: IChartData[];
    title: string;
    className?: string;
}

export const BarChart: React.FC<BarChartProps> = ({data, title, className}) => {
    const grid = true;
    const dataKey = 'value'
    return (
        <div className={clsx('chart', className)}>
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <RechartsBarChart data={data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Bar dataKey={dataKey} fill="#5550bd"/>
                    <Tooltip cursor={{ fill: 'transparent' }}/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChart;
