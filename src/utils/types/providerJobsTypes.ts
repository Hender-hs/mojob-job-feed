import { JobsListings, PositionFunction } from "./jobsTypes";

export interface JobsListingsResponse {
  'data': {
    'count': string
    'next': string
    'previous': string
    'results': JobsListings[]
  }
}

export interface JobsListingsResponse {
  'data': {
    'count': string
    'next': string
    'previous': string
    'results': JobsListings[]
  }
}

export interface PositionFunctionsResponse {
  'data': {
    'count': string
    'next': string
    'previous': string
    'results': PositionFunction[]
  }
}