import { Dispatch, SetStateAction } from 'react'
import { useJobsListings }          from '../../provider/jobs'
import { PopUpJobsFilterPerPage }   from '../popUpJobsFilterPerPage'
import * as S                       from './styles'

interface JobFilterPerPageProps {
  'openJobFilterPerPagePopUpBox': boolean,
  'setOpenJobFilterPerPagePopUpBox': Dispatch<SetStateAction<boolean>>
}

export const JobFilterPerPage = ({openJobFilterPerPagePopUpBox, setOpenJobFilterPerPagePopUpBox}: JobFilterPerPageProps) => {

  const { jobsPerPageCount } = useJobsListings()

  return (
    <div onClick={() => setOpenJobFilterPerPagePopUpBox(!openJobFilterPerPagePopUpBox)}>
      <S.Container2>
        <S.P2> {jobsPerPageCount !== '1000' ? jobsPerPageCount : 'all'} Per Page <S.Arrow size={20} /> </S.P2>
      </S.Container2>
      {!!openJobFilterPerPagePopUpBox && <PopUpJobsFilterPerPage />}
    </div>
  )
}