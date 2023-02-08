import './dashboard.css'

import React from 'react'

import DashboardCharts from '../components/DashboardCharts'

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <DashboardCharts />
    </div>
  )
}

export default Dashboard
