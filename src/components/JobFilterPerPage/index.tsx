import { Dispatch, SetStateAction } from 'react'
import { useJobsListings }          from '../../provider/jobs'
import { PopUpJobsFilterPerPage }   from '../popUpJobsFilterPerPage'
import * as S                       from './styles'

interface JobFilterPerPageProps {
  'openJobFilterPerPage': boolean,
  'setOpenJobFilterPerPage': Dispatch<SetStateAction<boolean>>
}

export const JobFilterPerPage = ({openJobFilterPerPage, setOpenJobFilterPerPage}: JobFilterPerPageProps) => {

  const { jobsPerPage } = useJobsListings()

  return (
    <div onClick={() => setOpenJobFilterPerPage(!openJobFilterPerPage)}>
      <S.Container2>
        <S.P2> {jobsPerPage !== '100' ? jobsPerPage : 'all'} Per Page <S.Arrow size={20} /> </S.P2>
      </S.Container2>
      {!!openJobFilterPerPage && <PopUpJobsFilterPerPage />}
    </div>
  )
}