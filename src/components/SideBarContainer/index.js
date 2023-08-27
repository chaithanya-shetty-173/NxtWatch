import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {GiConsoleController} from 'react-icons/gi'

import {
  FooterDescription,
  SocialMediaIcon,
  SocialMediaContainer,
  FooterTitle,
  FooterContainer,
  LinkRoute,
  NavLinkText,
  NavLinkIconContainer,
  NavLinkButton,
  NavLinksContainer,
  SideBarMenu,
} from './styledComponent'

import NxtContext from '../../context/NxtContext'

const SideBarContainer = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkThemeOn, selectedOption, changeOption} = value
      console.log(selectedOption)

      const selectOption = option => {
        changeOption(option)
      }

      const renderNavLinks = () => (
        <NavLinksContainer>
          <LinkRoute to="/">
            <li>
              <NavLinkButton
                isSelected={selectedOption === 'HOME'}
                background={isDarkThemeOn ? '#424242' : '#f1f5f9'}
                onClick={() => {
                  selectOption('HOME')
                }}
              >
                <NavLinkIconContainer>
                  <AiFillHome />
                </NavLinkIconContainer>
                <NavLinkText isDarkThemeOn={isDarkThemeOn}>Home</NavLinkText>
              </NavLinkButton>
            </li>
          </LinkRoute>
          <LinkRoute to="/trending">
            <li>
              <NavLinkButton
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
              </NavLinkButton>
            </li>
          </LinkRoute>
          <LinkRoute to="/gaming">
            <li>
              <NavLinkButton
                isSelected={selectedOption === 'GAMING'}
                background={isDarkThemeOn ? '#424242' : '#f1f5f9'}
                onClick={() => {
                  selectOption('GAMING')
                }}
              >
                <NavLinkIconContainer>
                  <GiConsoleController />
                </NavLinkIconContainer>
                <NavLinkText isDarkThemeOn={isDarkThemeOn}>Gaming</NavLinkText>
              </NavLinkButton>
            </li>
          </LinkRoute>
          <LinkRoute to="/saved-videos">
            <li>
              <NavLinkButton
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
              </NavLinkButton>
            </li>
          </LinkRoute>
        </NavLinksContainer>
      )

      const renderFooterContainer = () => (
        <FooterContainer isDarkThemeOn={isDarkThemeOn}>
          <FooterTitle isDarkThemeOn={isDarkThemeOn}>CONTACT US</FooterTitle>
          <SocialMediaContainer>
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialMediaIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </SocialMediaContainer>
          <FooterDescription isDarkThemeOn={isDarkThemeOn}>
            Enjoy! Now to see your channels and recommendations!
          </FooterDescription>
        </FooterContainer>
      )

      return (
        <SideBarMenu isDarkThemeOn={isDarkThemeOn}>
          {renderNavLinks()}
          {renderFooterContainer()}
        </SideBarMenu>
      )
    }}
  </NxtContext.Consumer>
)

export default SideBarContainer
