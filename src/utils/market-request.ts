import {IMarketRequest} from "../contracts/market-request";

export const getMarketRequest = (date: string): IMarketRequest => {
    return {
        elements: [
            {
                path: 'air.dailyPayments',
                fields: ['total'],
                refs: [['id_payment', 'name'], ['id_payment', 'ml_name']]
            },
            {
                path: 'air.dailyCategories',
                fields: ['total'],
                refs: [['id_category', 'name']]
            },
            {
                path: 'air.hourlySales',
                fields: ['hour', 'count', 'total']
            },
            {
                path: 'air.dailyWaiters',
                fields: ['total', 'count'],
                refs:[['id_waiter', 'name']]
            }
        ],
        args: { days: `${date}` },
        orderBy: [{ field: 'day' }]
    };
}
