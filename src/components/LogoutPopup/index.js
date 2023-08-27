import {withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import {
  LogoutStyledPopup,
  LogoutButton,
  MobileLogoutButton,
  LargeScreenLogoutText,
  LogOutPopupContainer,
  LogoutText,
  CancelButton,
  ConfirmButton,
} from './styledComponent'

import NxtContext from '../../context/NxtContext'

const LogoutPopup = props => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value

      const onClickConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      return (
        <LogoutStyledPopup
          isDarkThemeOn={isDarkThemeOn}
          trigger={
            <LogoutButton isDarkThemeOn={isDarkThemeOn}>
              <MobileLogoutButton isDarkThemeOn={isDarkThemeOn}>
                <FiLogOut />
              </MobileLogoutButton>
              <LargeScreenLogoutText>Logout</LargeScreenLogoutText>
            </LogoutButton>
          }
          modal
        >
          {close => (
            <LogOutPopupContainer>
              <LogoutText isDarkThemeOn={isDarkThemeOn}>
                Are you sure, you want to logout?
              </LogoutText>
              <CancelButton onClick={close}>Cancel</CancelButton>
              <ConfirmButton onClick={onClickConfirm}>Confirm</ConfirmButton>
            </LogOutPopupContainer>
          )}
        </LogoutStyledPopup>
      )
    }}
  </NxtContext.Consumer>
)

export default withRouter(LogoutPopup)
