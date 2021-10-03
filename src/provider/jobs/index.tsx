import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react'
import { JobsApi } from '../../server'
import { JobsListings, PositionFunction } from '../../utils/types/jobsTypes'
import { JobsListingsResponse, PositionFunctionsResponse } from '../../utils/types/providerJobsTypes'


interface JobsContext {
  'getJobsList': () => void,
  'getJobsPositionFunctions': () => void,
  'getFilteredByPositionFunctionJobsList': (checkInput: boolean, param: number) => void,
  'jobsList': JobsListings[] | null,
  'positionsFunctions': PositionFunction[] | [],
  'jobsPerPage': string,
  'setJobsPerPage': Dispatch<SetStateAction<string>>
}

interface JobsProvider {
  'children': ReactNode,
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
    const response: PositionFunctionsResponse = await JobsApi.get('job/position-functions/?page=2&use_pagination=True')
    setPositionsFunctions(response.data.results)
    console.log(response)
    
    // while (!!response.data.next) {
    //   const nextPageResponse: any = await JobsApi.get(response.data.next)
    //   setPositionsFunctions([...positionsFunctions, nextPageResponse])
    // }
  }

  const getFilteredByPositionFunctionJobsList = async (checkInput: boolean, JobPositionId: number) => {

    // if (!checkInput) {
    //   const removedPosition: any = jobsList?.filter( (element: JobsListings) => element.job.position_function_id !== JobPositionId )
    //   setJobsList(removedPosition)
    // }

    const positionsToRequest = [...jobsPostionsToFetchArray, JobPositionId]

    const positionsAsParams = positionsToRequest.join('%2C')

    const response: JobsListingsResponse = await JobsApi.get(
      `/job/listings/?include_open=False&page=1&page_size=25&position_functions=${positionsAsParams}&use_mojob_feed_filter=True&use_pagination=True`
    )
    setJobsList(response.data.results)
    setJobsPostionsToFetchArray(positionsToRequest)
  }

  
  return (
    <JobsContext.Provider value={{getJobsList, getJobsPositionFunctions, getFilteredByPositionFunctionJobsList, jobsList, positionsFunctions, jobsPerPage, setJobsPerPage}} >
      {children}
    </JobsContext.Provider>
  )
}

export const useJobsListings = () => useContext(JobsContext)