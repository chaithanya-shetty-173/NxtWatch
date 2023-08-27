import {GiConsoleController, GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  StyledPopup,
  HamBurgerButton,
  CloseButton,
  MenuListContainer,
  NavLinksContainer,
  NavLinkIconContainer,
  NavLinkText,
  BarNavLink,
  LinkRoute,
} from './styledComponent'
import NxtContext from '../../context/NxtContext'

const NavMenuList = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkThemeOn, selectedOption, changeOption} = value

      const selectOption = option => {
        changeOption(option)
      }

      return (
        <StyledPopup
          isDarkThemeOn={isDarkThemeOn}
          trigger={
            <HamBurgerButton isDarkThemeOn={isDarkThemeOn}>
              <GiHamburgerMenu />
            </HamBurgerButton>
          }
          modal
        >
          {close => (
            <MenuListContainer isDarkThemeOn={isDarkThemeOn}>
              <CloseButton
                type="button"
                onClick={close}
                isDarkThemeOn={isDarkThemeOn}
              >
                <AiOutlineClose />
              </CloseButton>
              <NavLinksContainer>
                <LinkRoute to="/">
                  <li>
                    <BarNavLink
                      isSelected={selectedOption === 'HOME'}
                      background={isDarkThemeOn ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('HOME')
                      }}
                    >
                      <NavLinkIconContainer>
                        <AiFillHome />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkThemeOn={isDarkThemeOn}>
                        Home
                      </NavLinkText>
                    </BarNavLink>
                  </li>
                </LinkRoute>
                <LinkRoute to="/trending">
                  <li>
                    <BarNavLink
                      isSelected={selectedOption === 'TRENDING'}
                      background={isDarkThemeOn ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('TRENDING')
                      }}
                    >
                      <NavLinkIconContainer>
                        <HiFire />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkThemeOn={isDarkThemeOn}>
                        Trending
                      </NavLinkText>
                    </BarNavLink>
                  </li>
                </LinkRoute>
                <LinkRoute to="/gaming">
                  <li>
                    <BarNavLink
                      isSelected={selectedOption === 'GAMING'}
                      background={isDarkThemeOn ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('GAMING')
                      }}
                    >
                      <NavLinkIconContainer>
                        <GiConsoleController />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkThemeOn={isDarkThemeOn}>
                        Gaming
                      </NavLinkText>
                    </BarNavLink>
                  </li>
                </LinkRoute>
                <LinkRoute to="/saved-videos">
                  <li>
                    <BarNavLink
                      isSelected={selectedOption === 'SAVED'}
                      background={isDarkThemeOn ? '#424242' : '#f1f5f9'}
                      onClick={() => {
                        selectOption('SAVED')
                      }}
                    >
                      <NavLinkIconContainer>
                        <MdPlaylistAdd />
                      </NavLinkIconContainer>
                      <NavLinkText isDarkThemeOn={isDarkThemeOn}>
                        Saved Videos
                      </NavLinkText>
                    </BarNavLink>
                  </li>
                </LinkRoute>
              </NavLinksContainer>
            </MenuListContainer>
          )}
        </StyledPopup>
      )
    }}
  </NxtContext.Consumer>
)

export default NavMenuList
