import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  display: flex;
  min-height: 90vh;
  background-color: ${props => (props.isDarkThemeOn ? '#0f0f0f' : '#f9f9f9')};
`

export const SideBarMenuContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LoaderBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-grow: 1;
`
export const FailureViewImage = styled.img`
  width: 280px;
`
export const ErrorText = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  margin-bottom: 16px;
`
export const ErrorDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 16px;
  margin-top: 0;
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 84px;
  height: 32px;
  background-color: #4f46e5;
`

export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  height: 90vh;
`

export const GamingCard = styled.div`
  display: flex;
  padding: 10px 35px;
  align-items: center;
  background-color: ${props => (props.isDarkThemeOn ? '#212121' : '#ebebeb')};
  width: 100%;
`
export const GamingIconContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-right: 20px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkThemeOn ? '#0f0f0f' : '#d7dfe9')};
  color: #ff0000;
  margin-right: 16px;
`
export const GamingCardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#212121')};
  font-weight: 600;
`
export const GamingVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 32px 24px 24px 48px;
  margin: 0;
  width: 100%;
`
