import { IMarketSectionElement } from '../contracts/market-response'
import {
  ICategoriesTable,
  IPaymentsTable,
  ISalesTable,
  IWaitersTable
} from '../models/market-tables'

export const getMarketTables = (
  elements: IMarketSectionElement[]
): [IPaymentsTable[], ICategoriesTable[], ISalesTable[], IWaitersTable[]] => {
  if (elements.length !== 5) {
    return [[], [], [], []]
  }
  return [
    elements[1].map((item) => ({ total: item[0], name: item[1] })),
    elements[2].map((item) => ({ total: item[0], name: item[1] })),
    elements[3].map((item) => ({
      hour: item[0],
      count: item[1],
      total: item[2]
    })),
    elements[4].map((item) => ({
      total: item[0],
      count: item[1],
      name: item[2]
    }))
  ]
}
