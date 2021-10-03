import styled                 from 'styled-components'
import { IoMdArrowDropdown }  from 'react-icons/io'


export const Container = styled.div `
  width: 180px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const P = styled.p `
  color: #000;
  font-size: 12px;
  font-weight: 900;
  line-height: 16px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Span = styled.span `
  font-size: larger;
`

export const Arrow = styled(IoMdArrowDropdown) `
  margin-left: 10px;
`