import * as S           from './styles'
import { JobsListings } from '../../utils/types/jobsTypes'

interface JobCardProps {
  'jobContent': JobsListings
}

export const JobCard = ({jobContent}: JobCardProps) => {

  const dueDate = new Date(jobContent.job.due_date)

  return (
    <S.Card>
      <S.UpSide>
        <S.Title>{jobContent.job.title}</S.Title>
      </S.UpSide>
      <S.DownSide>
        <S.P>{jobContent.job.unit.name} 
        <S.Span>&#8226;</S.Span> Position Function: {jobContent.job.position_function.name_en} 
        <S.Span>&#8226;</S.Span> Due Date: {dueDate.toDateString()} 
      </S.P>
      </S.DownSide>
    </S.Card>
  )
}