import { useState } from 'react'
import { useJobsListings } from '../../provider/jobs'
import { PositionFunction, PositionFunctionChildren } from '../../utils/types/jobsTypes'
import * as S from './styles'


interface InputEvent {
  'target': {
    'checked': boolean
  }
}

interface PopUpJobsPositionProps {
  'openPopUp': boolean,
  'positionsJobs': PositionFunction[]
}


export const PopUpJobsPositionsList = ({ positionsJobs, openPopUp }: PopUpJobsPositionProps) => {

  const [checkedInputs, setCheckedInputs]         = useState<number[]>([])
  const { getJobsFilteredByPositionFunctions } = useJobsListings()

  
  const addAndRemoveCheckedInputs = (event: InputEvent, id: number) => {

    event.target.checked && setCheckedInputs( [...checkedInputs, id] )
    !event.target.checked && setCheckedInputs( checkedInputs.filter((e) => e !== id) )
  }
  
  const JSXpositionFunctionsChildren = (childrenElement: PositionFunctionChildren, parentIndex: number, childIndex: number) => (

    <S.JobsRowChild openChildInput={checkedInputs.includes(parentIndex)} key={childIndex}>
      <S.Input onChange={ event => getJobsFilteredByPositionFunctions(event.target.checked, childrenElement.id) } type='checkbox' />
      <S.Label>{childrenElement.name}</S.Label>
    </S.JobsRowChild>
  )
  

  const JSXpostionFunctionsList = (element: PositionFunction, parentIndex: number) => (
    
    <S.JobsRow key={parentIndex}>
      <S.Input onChange={event => addAndRemoveCheckedInputs(event, parentIndex)} type='checkbox' />
      <S.Label>{element.name_en}</S.Label>
      {
        positionsJobs[parentIndex].children.map( (child: PositionFunctionChildren, childIndex: number) => (
          JSXpositionFunctionsChildren(child, parentIndex, childIndex) 
          )
        )
      }
    </S.JobsRow>
  )

  
  return (
    <S.Container openPopUp={openPopUp} >
      {!!positionsJobs.length && positionsJobs.map(JSXpostionFunctionsList)}
    </S.Container>
  )
}