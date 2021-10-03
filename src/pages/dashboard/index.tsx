import * as S                     from './styles'
import { JobCard }                from '../../components/jobCard'
import { JobFilterPosition }      from '../../components/jobFilterPosition'
import { JobFilterPerPage }       from '../../components/JobFilterPerPage'
import MojobLogo                  from '../../assets/Active.svg'
import { useEffect, useState }    from 'react'
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
            <JobFilterPosition setOpenPopUpJobFilterPosition={setOpenPopUpJobFilterPosition} openPopUpJobFilterPosition={openPopUpJobFilterPosition} />
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