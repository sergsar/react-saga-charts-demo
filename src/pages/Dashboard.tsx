import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {fetchMarketRequest} from "../store/market/actions";

const Dashboard: React.FC<{}> = (props: any) => {
    const dispatch = useDispatch();

    const marketState = useSelector(
        (state: RootState) => state.market
    )

    useEffect(() => {
        dispatch(fetchMarketRequest())
    }, []);

    console.log('market: ', marketState)

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;
