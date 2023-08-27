import Header from '../Header'
import SideBarContainer from '../SideBarContainer'

import {
  NotFoundBgContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

import NxtContext from '../../context/NxtContext'

const NotFoundRoute = () => (
  <NxtContext.Consumer>
    {value => {
      const {isDarkThemeOn} = value
      return (
        <>
          <Header />
          <NotFoundBgContainer isDarkThemeOn={isDarkThemeOn}>
            <SideBarContainer />
            <NotFoundContentContainer>
              <NotFoundImage
                src={
                  isDarkThemeOn
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isDarkThemeOn={isDarkThemeOn}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContentContainer>
          </NotFoundBgContainer>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFoundRoute
