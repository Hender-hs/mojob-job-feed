import { useJobsListings }  from '../../provider/jobs'
import * as S               from './styles'

export const PopUpJobsFilterPerPage = () => {

  const { setJobsPerPage, jobsPerPage } = useJobsListings()

  return (
    <S.ContainerPerPage>
      {jobsPerPage !== '5'    && <S.P onClick={() => setJobsPerPage('5')} >5 per page</S.P>}
      {jobsPerPage !== '25'   && <S.P onClick={() => setJobsPerPage('25')} >25 per page</S.P>}
      {jobsPerPage !== '100'  && <S.P onClick={() => setJobsPerPage('1000')} >Display all</S.P>}
    </S.ContainerPerPage>
  )
}