import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {withRouter, Link} from 'react-router-dom'
import NavMenuList from '../NavMenuList/index'
import LogoutPopup from '../LogoutPopup'
import {
  NavbarBgContainer,
  Logo,
  ThemeButton,
  ProfileIcon,
} from './styledComponent'

import NxtContext from '../../context/NxtContext'

const Header = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkThemeOn, onToggleThemeIcon} = value
      return (
        <NavbarBgContainer isDarkThemeOn={isDarkThemeOn}>
          <Link to="/">
            <Logo
              alt="website logo"
              src={
                isDarkThemeOn
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </Link>
          <ThemeButton
            isDarkThemeOn={isDarkThemeOn}
            onClick={onToggleThemeIcon}
            data-testid="theme"
          >
            {isDarkThemeOn ? <BiSun /> : <FaMoon />}
          </ThemeButton>
          <ProfileIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <NavMenuList />
          <LogoutPopup />
        </NavbarBgContainer>
      )
    }}
  </NxtContext.Consumer>
)

export default withRouter(Header)
