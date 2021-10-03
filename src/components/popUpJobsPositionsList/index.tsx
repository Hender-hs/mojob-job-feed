import { useEffect, useState } from 'react'
import { useJobsListings } from '../../provider/jobs'
import { PositionFunction, PositionFunctionChildren } from '../../utils/types/jobsTypes'
import * as S from './styles'

interface InputEvent {
  'target': {
    'checked': boolean
  }
}

interface PopUpJobsPosition {
  'openPopUp': boolean,
  'positionsJobs': PositionFunction[]
}

export const PopUpJobsPositionsList = ({ positionsJobs, openPopUp }: PopUpJobsPosition) => {

  const [checkedInputs, setCheckedInputs] = useState<number[]>([])

  const { getFilteredJobsList } = useJobsListings()

  const addAndRemoveCheckedInputs = (event: InputEvent, id: number) => {
    event.target.checked && setCheckedInputs( [...checkedInputs, id] )
    !event.target.checked && setCheckedInputs( checkedInputs.filter((e) => e !== id) )
  }

  const Inputschild = (childrenElement: PositionFunctionChildren, i: number) => (
    <S.JobsRowChild key={i}>
      <S.Input onChange={ event => !!event.target.checked && getFilteredJobsList(childrenElement.parent_id) } type='checkbox' />
      <S.Label>{childrenElement.name}</S.Label>
    </S.JobsRowChild>
  )
  

  const InputsPositions = (element: PositionFunction, i: number) => (
    <S.JobsRow key={i}>
      <S.Input onChange={event => addAndRemoveCheckedInputs(event, i)} type='checkbox' />
      <S.Label>{element.name_en}</S.Label>
      {checkedInputs.includes(i) && positionsJobs[i].children.map(Inputschild)}
    </S.JobsRow>
  )

  return (
    <S.Container openPopUp={openPopUp} >
      {!!positionsJobs.length && positionsJobs.map(InputsPositions)}
    </S.Container>
  )
}