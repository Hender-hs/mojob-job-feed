import styled from 'styled-components'

export const Body = styled.main `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const Header = styled.header `
  width: 100%;
  height: 7%;

  background-color: #fff;

  display: flex;
  align-items: center;
`

export const SubBody = styled.div `
  width: 100%;
  height: 93%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #FAFDFD;
`

export const Container = styled.div `
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FiltersSection = styled.div `
  width: 85%;

  display: flex;
  justify-content: space-between;
`

export const JobsList = styled.div `
  height: 100%;
  width: 100%;

  overflow: scroll;

  margin-top: 10px;
`

export const CardDiv = styled.div `
  margin: 17px 0;

  display: flex;
  justify-content: center;
`

export const ImgLogo = styled.img `
  width: 120px;

  margin-left: 10px;
`