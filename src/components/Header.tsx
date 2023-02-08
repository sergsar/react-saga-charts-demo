import React from "react";

import './header.css';
import DateSelect from "./DateSelect";

const Header: React.FC<{}> = (props: any) => {
    return (
        <div className="market-header">
            <span className="logo">MegaMarket</span>
            <DateSelect className="header-date-select" />
        </div>
    )
}

export default Header;
