import * as S           from './styles'
import { JobsListings } from '../../utils/types/jobsTypes'

interface JobCardProps {
  'jobContent': JobsListings
}

export const JobCard = ({jobContent}: JobCardProps) => {
  return (
    <S.Card>
      <S.UpSide>
        <S.Title>{jobContent.job.unit.name}</S.Title>
      </S.UpSide>
      <S.DownSide>
        <S.P>{jobContent.job.unit.name} <S.Span>&#8226;</S.Span> {jobContent.job.position_function.name_en} <S.Span>&#8226;</S.Span> {jobContent.job.due_date} </S.P>
      </S.DownSide>
    </S.Card>
  )
}