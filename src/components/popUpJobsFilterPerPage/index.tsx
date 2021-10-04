import { useJobsListings }  from '../../provider/jobs'
import * as S               from './styles'

export const PopUpJobsFilterPerPage = () => {

  const { setJobsPerPageCount, jobsPerPageCount } = useJobsListings()

  return (
    <S.ContainerPerPage>
      {jobsPerPageCount !== '5'    && <S.P onClick={() => setJobsPerPageCount('5')} >5 per page</S.P>}
      {jobsPerPageCount !== '25'   && <S.P onClick={() => setJobsPerPageCount('25')} >25 per page</S.P>}
      {jobsPerPageCount !== '1000'  && <S.P onClick={() => setJobsPerPageCount('1000')} >Display all</S.P>}
    </S.ContainerPerPage>
  )
}