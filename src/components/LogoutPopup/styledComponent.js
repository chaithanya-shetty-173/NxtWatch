import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const LogoutStyledPopup = styled(Popup)`
  &-content {
    width: 300px;
    background-color: ${props =>
      props.isDarkThemeOn ? '#313131 ' : '#f9f9f9'};
    text-align: center;
    border-radius: 5px;
    padding: 20px;
  }
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const LogOutPopupContainer = styled.div`
  width: 100%;
`

export const LogoutButton = styled.button`
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  width: 70px;
  height: 26px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border: 1px solid ${props => (props.isDarkThemeOn ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  @media screen and (max-width: 767px) {
    border: none;
    width: 30px;
  }
`
export const MobileLogoutButton = styled.span`
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#000000')};
  background-color: transparent;
  margin-right: 10px;
  border: none;
  outline: none;
  font-size: 25px;
  align-items: center;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LargeScreenLogoutText = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDarkThemeOn ? '400' : '500')};
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#00306e')};
  margin-bottom: 32px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  width: 80px;
  height: 30px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border-radius: 2px;
  color: #94a3b8;
  margin: 0 24px 0 0;
`
export const ConfirmButton = styled(CancelButton)`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  margin: 0;
`
