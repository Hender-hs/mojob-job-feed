import * as S                     from './styles'
import { JobCard }                from '../../components/jobCard'
import { JobFilterPosition }      from '../../components/jobFilterPosition'
import { JobFilterPerPage }       from '../../components/JobFilterPerPage'
import MojobLogo                  from '../../assets/Active.svg'
import { useEffect, useState }    from 'react'
import { PopUpJobsPositionsList } from '../../components/popUpJobsPositionsList'
import { PopUpJobsFilterPerPage } from '../../components/popUpJobsFilterPerPage'
import { useJobsListings }        from '../../provider/jobs'
import { JobsListings }           from '../../utils/types/jobsTypes'

export const Dashboard = () => {

  const [openPopUpJobFilterPosition, setOpenPopUpJobFilterPosition] = useState<boolean>(false)

  const [openJobFilterPerPage, setOpenJobFilterPerPage] = useState<boolean>(false)

  const { getJobsList, getJobsPositionFunctions, jobsList, positionsFunctions } = useJobsListings()

  const printJobsCards = (element: JobsListings, index: number) => (
    <S.CardDiv key={index}>
      <JobCard jobContent={element} />
    </S.CardDiv>
  )

  useEffect( () => {
    !jobsList && getJobsList()
    !positionsFunctions?.length && getJobsPositionFunctions()
  })

  return (
    <S.Body>
      <S.Header>
        <S.ImgLogo src={MojobLogo} />
      </S.Header>
      <S.SubBody>
        <S.Container>
          <S.FiltersSection>
            <div onClick={() => setOpenPopUpJobFilterPosition(!openPopUpJobFilterPosition)} >
              <JobFilterPosition />
            </div>
              <PopUpJobsPositionsList positionsJobs={positionsFunctions} openPopUp={openPopUpJobFilterPosition} />
            {/* <div onClick={() => setOpenJobFilterPerPage(!openJobFilterPerPage)}>
              <JobFilterPerPage />
            </div> */}
            <JobFilterPerPage setOpenJobFilterPerPage={setOpenJobFilterPerPage} openJobFilterPerPage={openJobFilterPerPage} />
          </S.FiltersSection>
          <S.JobsList>
            {!!jobsList && jobsList.map(printJobsCards)}
          </S.JobsList>
        </S.Container>
      </S.SubBody>
    </S.Body>
  )
}