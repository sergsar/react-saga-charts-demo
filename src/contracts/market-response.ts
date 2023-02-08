export interface IMarketResponse {
  sections: IMarketSection[]
}

export interface IMarketSection {
  elements: IMarketSectionElement[][]
}

export type IMarketSectionElement = never[][]
