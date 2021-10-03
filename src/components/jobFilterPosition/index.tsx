import { Dispatch, SetStateAction } from 'react'
import { useJobsListings }          from '../../provider/jobs'
import { PopUpJobsPositionsList }   from '../popUpJobsPositionsList'
import * as S                       from './styles'

interface JobFilterPositionProps {
  'setOpenPopUpJobFilterPosition': Dispatch<SetStateAction<boolean>>,
  'openPopUpJobFilterPosition': boolean,
}

export const JobFilterPosition = ({setOpenPopUpJobFilterPosition, openPopUpJobFilterPosition}: JobFilterPositionProps) => {

  const { positionsFunctions } = useJobsListings()

  return (
    <>
      <div onClick={() => setOpenPopUpJobFilterPosition(!openPopUpJobFilterPosition)} >
        <S.Container>
          <S.P> filter by position <S.Arrow size={20} /> </S.P>
        </S.Container>
      </div>
      <PopUpJobsPositionsList positionsJobs={positionsFunctions} openPopUp={openPopUpJobFilterPosition} />
    </>
  )
}