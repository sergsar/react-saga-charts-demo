export interface IMarketRequest {
  args: IMarketRequestArgs
  elements: IMarketRequestElement[]
  orderBy: IMarketRequestOrderBy[]
}

export interface IMarketRequestArgs {
  days: string
}

export interface IMarketRequestElement {
  path?: string
  fields: string[]
  refs?: string[][]
}

export interface IMarketRequestOrderBy {
  field: string
}
