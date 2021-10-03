import styled from 'styled-components'
import { Container } from '../popUpJobsPositionsList/styles'

export const ContainerPerPage = styled.div `
  width: 154px;
  height: 132px;

  position: absolute;
  left: 75.2vw;

  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  overflow-y: scroll;
`

export const P = styled.p `
  font-size: 18px;
  line-height: 22px;
  font-weight: 100;
  letter-spacing: 0.8px;

  color: #2E2E2E;

  margin: 10px 0 10px 10px;

  cursor: pointer;
`
