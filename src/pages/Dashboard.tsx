import React from "react";
import DashboardCharts from "../components/DashboardCharts";
import './dashboard.css';

const Dashboard: React.FC<{}> = (props: any) => {
    return (
        <div className="dashboard">
            <DashboardCharts />
        </div>
    )
}

export default Dashboard;
