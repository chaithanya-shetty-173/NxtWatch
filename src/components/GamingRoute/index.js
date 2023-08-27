import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {GiConsoleController} from 'react-icons/gi'
import Header from '../Header'
import SideBarContainer from '../SideBarContainer'

import {
  GamingBgContainer,
  GamingContentContainer,
  GamingCard,
  GamingIconContainer,
  GamingCardTitle,
  SideBarMenuContainer,
  RetryButton,
  ErrorDescription,
  ErrorText,
  FailureViewImage,
  LoaderBgContainer,
  GamingVideosList,
} from './styledComponent'

import GameCard from '../GameCard'

import NxtWatchContext from '../../context/NxtContext'

const GamingVideosApiStatus = {
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class GamingRoute extends Component {
  state = {status: GamingVideosApiStatus.loading, videosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  snakeToCamel = obj => {
    if (typeof obj !== 'object') {
      return obj // Return as is for non-object types or arrays
    }

    if (Array.isArray(obj)) {
      return obj.map(eachItem => this.snakeToCamel(eachItem))
    }

    const camelObj = {}
    Object.keys(obj).forEach(key => {
      const camelKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
      camelObj[camelKey] = this.snakeToCamel(obj[key])
    })

    return camelObj
  }

  getGamingVideos = async () => {
    const GamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const GamingResponse = await fetch(GamingVideosApiUrl, options)
    if (GamingResponse.ok) {
      const GamingData = await GamingResponse.json()
      const UpdatedData = this.snakeToCamel(GamingData)
      console.log('UpdatedData')
      console.log(UpdatedData)
      this.setState({
        videosList: UpdatedData,
        status: GamingVideosApiStatus.success,
      })
    } else {
      this.setState({status: GamingVideosApiStatus.failure})
    }
  }

  render() {
    const {status} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeOn} = value

          const renderGamingPageSuccessContainer = () => {
            const {videosList} = this.state
            const {videos} = videosList
            return (
              <GamingContentContainer>
                <GamingCard isDarkThemeOn={isDarkThemeOn}>
                  <GamingIconContainer isDarkThemeOn={isDarkThemeOn}>
                    <GiConsoleController />
                  </GamingIconContainer>
                  <GamingCardTitle isDarkThemeOn={isDarkThemeOn}>
                    Gaming
                  </GamingCardTitle>
                </GamingCard>
                <GamingVideosList>
                  {videos.map(eachItem => (
                    <GameCard
                      isDarkThemeOn={isDarkThemeOn}
                      videoCard={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </GamingVideosList>
              </GamingContentContainer>
            )
          }

          const renderGamingPageFailureView = () => (
            <LoaderBgContainer>
              <FailureViewImage
                src={
                  isDarkThemeOn
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <ErrorText isDarkThemeOn={isDarkThemeOn}>
                Oops! Something Went Wrong
              </ErrorText>
              <ErrorDescription>
                We are having some trouble to complete your request. Please try
                again.
              </ErrorDescription>
              <RetryButton type="button" onClick={this.onClickRetryButton}>
                Retry
              </RetryButton>
            </LoaderBgContainer>
          )

          const renderLoadingContainer = () => (
            <LoaderBgContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkThemeOn ? '#ffffff' : '#3b82f6'}
                height="50"
                width="50"
              />
            </LoaderBgContainer>
          )

          const renderGamingPage = () => {
            switch (status) {
              case GamingVideosApiStatus.loading:
                return renderLoadingContainer()
              case GamingVideosApiStatus.failure:
                return renderGamingPageFailureView()
              case GamingVideosApiStatus.success:
                return renderGamingPageSuccessContainer()
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <GamingBgContainer
                isDarkThemeOn={isDarkThemeOn}
                data-testid="gaming"
              >
                <SideBarMenuContainer>
                  <SideBarContainer />
                </SideBarMenuContainer>
                {renderGamingPage()}
              </GamingBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingRoute
