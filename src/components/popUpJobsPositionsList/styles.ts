import styled from 'styled-components'


interface PopUpJobsPosition {
  'openPopUp': boolean,
}

interface PopUpJobsPositionChildrenProps {
  'checkedInput': boolean
}

export const Container = styled.div<PopUpJobsPosition> `
  position: absolute;
  left: 15vw;
  top: 20vh;

  width: 500px;
  height: 400px;

  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  overflow-y: scroll;
  visibility: ${({openPopUp}) => !!openPopUp ? 'visible' : 'hidden'};
`

export const P = styled.p `
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;

  color: #2E2E2E;
`

export const Input = styled.input `
`

export const JobsRow = styled.div `
  width: 90%;

  margin: 10px 0 5px 10px;
`


export const Label = styled.label `
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 0.8px;

  color: #2E2E2E;

  margin-left: 0 0 0 10px;
`

export const JobsRowChild = styled.div<PopUpJobsPositionChildrenProps> `
  width: 80%;

  margin: 10px 0 5px 25px;

  display: ${({checkedInput}) => !!checkedInput ? 'block' : 'none'};
`