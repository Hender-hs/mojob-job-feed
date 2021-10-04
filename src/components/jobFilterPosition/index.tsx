import { Dispatch, SetStateAction } from 'react'
import { useJobsListings }          from '../../provider/jobs'
import { PopUpJobsPositionsList }   from '../popUpJobsPositionsList'
import * as S                       from './styles'

interface JobFilterPositionProps {
  'setOpenPopUpJobFilterPositionPopUpBox': Dispatch<SetStateAction<boolean>>,
  'openPopUpJobFilterPositionPopUpBox': boolean,
}

export const JobFilterPosition = ({
  setOpenPopUpJobFilterPositionPopUpBox, openPopUpJobFilterPositionPopUpBox}: JobFilterPositionProps) => {

  const { positionsFunctions } = useJobsListings()

  return (
    <>
      <div onClick={() => setOpenPopUpJobFilterPositionPopUpBox(!openPopUpJobFilterPositionPopUpBox)} >
        <S.Container>
          <S.P> filter by position <S.Arrow size={20} /> </S.P>
        </S.Container>
      </div>
      <PopUpJobsPositionsList positionsJobs={positionsFunctions} openPopUp={openPopUpJobFilterPositionPopUpBox} />
    </>
  )
}