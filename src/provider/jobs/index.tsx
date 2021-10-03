import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { JobsApi } from '../../server'
import { JobsListings, PositionFunction } from '../../utils/types/jobsTypes'


interface JobsContext {
  'getJobsList': () => void,
  'getJobsPositionFunctions': () => void,
  'getFilteredJobsList': (param: number) => void,
  'jobsList': JobsListings[] | null,
  'positionsFunctions': PositionFunction[] | [],
  'jobsPerPage': string,
  'setJobsPerPage': Dispatch<SetStateAction<string>>
}

interface JobsProvider {
  'children': ReactNode,
}

interface JobsListingsResponse {
  'data': {
    'count': string
    'next': string
    'previous': string
    'results': JobsListings[]
  }
}

interface JobsListingsResponse {
  'data': {
    'count': string
    'next': string
    'previous': string
    'results': JobsListings[]
  }
}

interface PositionFunctionsResponse {
  'data': {
    'count': string
    'next': string
    'previous': string
    'results': PositionFunction[]
  }
}

export const JobsContext = createContext<JobsContext>({} as JobsContext)


export const JobsProvider = ({children}: JobsProvider) => {

  const [jobsList, setJobsList] = useState<JobsListings[] | null>(null)

  const [positionsFunctions, setPositionsFunctions] = useState<PositionFunction[] | []>([])

  const [jobsPostionsToFetchArray, setJobsPostionsToFetchArray] = useState<number[]>([])

  const [jobsPerPage, setJobsPerPage] = useState<string>('5')

  const getJobsList = async () => {
    const response: JobsListingsResponse = await JobsApi.get(`/job/listings/?include_open=False&page_size=${jobsPerPage}&use_mojob_feed_filter=False&use_pagination=True`)
    setJobsList(response.data.results)
  }

  useMemo(getJobsList, [jobsPerPage])

  const getJobsPositionFunctions = async () => {
    const response: PositionFunctionsResponse = await JobsApi.get('job/position-functions/')
    setPositionsFunctions(response.data.results)
  }

  const getFilteredJobsList = async (newJobPositionsToFetch: number) => {

    const positionsToRequest = [...jobsPostionsToFetchArray, newJobPositionsToFetch]

    const positionsAsParams = positionsToRequest.join('%2C')

    const response: JobsListingsResponse = await JobsApi.get(
      `/job/listings/?include_open=False&page=1&page_size=25&position_functions=${positionsAsParams}&use_mojob_feed_filter=True&use_pagination=True`
    )
    setJobsList(response.data.results)
    setJobsPostionsToFetchArray(positionsToRequest)
  }

  
  return (
    <JobsContext.Provider value={{getJobsList, getJobsPositionFunctions, getFilteredJobsList, jobsList, positionsFunctions, jobsPerPage, setJobsPerPage}} >
      {children}
    </JobsContext.Provider>
  )
}

export const useJobsListings = () => useContext(JobsContext)