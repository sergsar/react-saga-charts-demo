import React from "react";
import {Legend, ResponsiveContainer, Tooltip} from "recharts";
import {PieChart as RechartsPieChart, Pie} from "recharts";
import clsx from 'clsx';
import './chart.css'
import {IChartData} from "../models/chart-data";

interface PieChartProps {
    data: IChartData[];
    title: string;
    className?: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, className }) => {

    return (
        <div className={clsx('chart', className)}>
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <RechartsPieChart>
                    <Pie data={data} dataKey="value" nameKey="name" />
                    <Tooltip />
                    <Legend />
                </RechartsPieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChart;
