import styled from 'styled-components'

export const HomePageContainer = styled.div`
  min-width: 300px;
  min-height: 90vh;
  display: flex;
  background-color: ${props => (props.isDarkThemeOn ? '#181818' : '#f9f9f9')};
`

export const BannerContainer = styled.div`
  display: flex;
`
export const HomePageRightSideContainer = styled.div`
  height: 90vh;
  flex-grow: 1;
  overflow-y: auto;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  height: 70%;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.isDarkThemeOn ? '#424242' : '#cbd5e1')};
  width: 320px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  background-color: ${props =>
    props.isDarkThemeOn ? 'transparent' : '#ffffff'};
  width: 80%;
  padding: 5px 10px;
  font-size: 14px;
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#1e293b')};
  outline: none;
  border: none;
  border-right: 1px solid
    ${props => (props.isDarkThemeOn ? '#424242' : '#cbd5e1')};
  height: 30px;
`
export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkThemeOn ? '#313131' : '#f4f4f4')};
  border: none;
  color: #909090;
  width: 20%;
  font-size: 14px;
  border: none;
  height: 30px;
`
export const LoaderBgContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureBgContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 165px;
`
export const ErrorText = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#1e293b')};
  margin-bottom: 16px;
`
export const ErrorDescription = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 16px;
  margin-top: 0;
  text-align: center;
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 90px;
  height: 30px;
  background-color: #4f46e5;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 0;
`
export const SideBarMenuContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
