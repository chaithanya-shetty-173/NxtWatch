import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  min-width: 300px;
  min-height: 90vh;
  display: flex;
  background-color: ${props => (props.isDarkThemeOn ? '#181818' : '#f9f9f9')};
`
export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
export const NotFoundImage = styled.img`
  width: 400px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#1e293b')};
  font-weight: 500;
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  margin: 0;
`
