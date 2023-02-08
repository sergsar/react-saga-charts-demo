import './header.css'

import React from 'react'

import DateSelect from './DateSelect'

const Header: React.FC = () => {
  return (
    <div className="market-header">
      <span className="logo">MegaMarket</span>
      <DateSelect className="header-date-select" />
    </div>
  )
}

export default Header
