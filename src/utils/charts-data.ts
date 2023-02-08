import { IChartData } from '../models/chart-data'
import {
  ICategoriesTable,
  IPaymentsTable,
  ISalesTable,
  IWaitersTable
} from '../models/market-tables'

const HOUR_KEYS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23
]

const PIE_COLORS = ['rgb(106, 143, 235)', 'rgb(131, 216, 175)']

export const getSalesPerHourChartData = (
  tables: ISalesTable[]
): IChartData[] => {
  return HOUR_KEYS.map(String).map((key) => {
    const table = tables.find((table) => table.hour === key)
    return { name: key, value: table ? table.total : 0 }
  })
}

export const getPaymentsChartData = (
  tables: IPaymentsTable[]
): IChartData[] => {
  return tables.map((table, index) => ({
    name: table.name,
    value: table.total,
    fill: PIE_COLORS[index]
  }))
}

export const getCategoriesChartData = (
  tables: ICategoriesTable[]
): IChartData[] => {
  return tables.map((table) => ({ name: table.name, value: table.total }))
}

export const getWaitersChartData = (tables: IWaitersTable[]): IChartData[] => {
  return tables.map((table) => ({ name: table.name, value: table.total }))
}
