import { useState } from 'react'
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

  const [checkedInputs, setCheckedInputs]         = useState<number[]>([])
  const { getFilteredByPositionFunctionJobsList } = useJobsListings()

  
  const addAndRemoveCheckedInputs = (event: InputEvent, id: number) => {

    event.target.checked && setCheckedInputs( [...checkedInputs, id] )
    !event.target.checked && setCheckedInputs( checkedInputs.filter((e) => e !== id) )
  }

  
  const addOrRemoveJobPositions = (postionFuncId: number, checkInput: boolean) => {

    getFilteredByPositionFunctionJobsList(checkInput, postionFuncId)
  }

  
  const JSXinputsChild = (childrenElement: PositionFunctionChildren, i: number) => (

    <S.JobsRowChild key={i}>
      <S.Input onChange={ event => addOrRemoveJobPositions(childrenElement.id, event.target.checked) } type='checkbox' />
      <S.Label>{childrenElement.name}</S.Label>
    </S.JobsRowChild>
  )
  

  const JSXinputsPositions = (element: PositionFunction, i: number) => (
    
    <S.JobsRow key={i}>
      <S.Input onChange={event => addAndRemoveCheckedInputs(event, i)} type='checkbox' />
      <S.Label>{element.name_en}</S.Label>
      {checkedInputs.includes(i) && positionsJobs[i].children.map(JSXinputsChild)}
    </S.JobsRow>
  )

  
  return (
    <S.Container openPopUp={openPopUp} >
      {!!positionsJobs.length && positionsJobs.map(JSXinputsPositions)}
    </S.Container>
  )
}