import { createContext, Dispatch, ReactNode }               from 'react' 
import { useContext, useMemo, useState, SetStateAction }    from 'react'
import { JobsApi }                                          from '../../server'
import { JobsListings, PositionFunction }                   from '../../utils/types/jobsTypes'
import { JobsListingsResponse, PositionFunctionsResponse }  from '../../utils/types/providerJobsTypes'


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

  const [jobsList, setJobsList]                                 = useState<JobsListings[] | null>(null)
  const [positionsFunctions, setPositionsFunctions]             = useState<PositionFunction[] | []>([])
  const [jobsPostionsToFetchArray, setJobsPostionsToFetchArray] = useState<number[]>([])
  const [jobsPerPage, setJobsPerPage]                           = useState<string>('5')


  const getJobsList = async () => {

    const positionsFunc = jobsPostionsToFetchArray.join('%2C')

    const response: JobsListingsResponse = await JobsApi.get(
      `/job/listings/?include_open=True&page=1&page_size=${jobsPerPage}&use_mojob_career_jobs_filter=True&position_functions=${positionsFunc}&use_mojob_feed_filter=True&use_pagination=True`
    )
    setJobsList(response.data.results)
  }


  const getJobsPositionFunctions = async () => {

    const response: PositionFunctionsResponse = await JobsApi.get('job/position-functions/?page=2&use_pagination=True')

    setPositionsFunctions(response.data.results)
  }
  
  
  const getFilteredByPositionFunctionJobsList = async (checkInput: boolean, JobPositionId: number) => {

    let positionsToRequest = [...jobsPostionsToFetchArray, JobPositionId]
    
    if (!checkInput) positionsToRequest = positionsToRequest.filter( idInArray => idInArray !== JobPositionId )

    setJobsPostionsToFetchArray(positionsToRequest)
  }


  useMemo(getJobsList, [jobsPerPage, jobsPostionsToFetchArray])
  

  return (
    <JobsContext.Provider value={{getJobsList, getJobsPositionFunctions, getFilteredByPositionFunctionJobsList, jobsList, positionsFunctions, jobsPerPage, setJobsPerPage}} >
      {children}
    </JobsContext.Provider>
  )
}

export const useJobsListings = () => useContext(JobsContext)