import { useJobsListings } from '../../provider/jobs'
import * as S from './styles'

export const PopUpJobsFilterPerPage = () => {

  const { setJobsPerPage } = useJobsListings()

  const handleClickSelectPerPage = (perPage: string) => {
    setJobsPerPage(perPage)
  }

  return (
    <S.ContainerPerPage>
      <S.P onClick={() => handleClickSelectPerPage('5')} >5 per page</S.P>
      <S.P onClick={() => handleClickSelectPerPage('25')} >25 per page</S.P>
      <S.P onClick={() => handleClickSelectPerPage('100')} >Display all</S.P>
    </S.ContainerPerPage>
  )
}