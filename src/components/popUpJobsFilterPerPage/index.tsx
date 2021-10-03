import { useJobsListings } from '../../provider/jobs'
import * as S from './styles'

export const PopUpJobsFilterPerPage = () => {

  const { setJobsPerPage } = useJobsListings()

  return (
    <S.ContainerPerPage>
      <S.P onClick={() => setJobsPerPage('5')} >5 per page</S.P>
      <S.P onClick={() => setJobsPerPage('25')} >25 per page</S.P>
      <S.P onClick={() => setJobsPerPage('100')} >Display all</S.P>
    </S.ContainerPerPage>
  )
}