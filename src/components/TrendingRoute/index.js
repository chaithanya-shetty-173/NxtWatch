import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBarContainer from '../SideBarContainer'

import TrendingVideoCard from '../TrendingVideoCard'

import {
  TrendingBgContainer,
  TrendingContentContainer,
  TrendingCard,
  TrendingIconContainer,
  TrendingCardTitle,
  SideBarMenuContainer,
  RetryButton,
  ErrorDescription,
  ErrorText,
  FailureViewImage,
  LoaderBgContainer,
  TrendingVideosList,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtContext'

const trendingVideosApiStatus = {
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class TrendingRoute extends Component {
  state = {status: trendingVideosApiStatus.loading, videosList: []}

  componentDidMount() {
    this.getTrendingVideos()
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

  getTrendingVideos = async () => {
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const TrendingResponse = await fetch(trendingVideosApiUrl, options)
    if (TrendingResponse.ok) {
      const TrendingData = await TrendingResponse.json()
      const UpdatedData = this.snakeToCamel(TrendingData)

      this.setState({
        videosList: UpdatedData,
        status: trendingVideosApiStatus.success,
      })
    } else {
      this.setState({status: trendingVideosApiStatus.failure})
    }
  }

  render() {
    const {status} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeOn} = value

          const renderTrendingPageSuccessContainer = () => {
            const {videosList} = this.state
            const {videos} = videosList
            return (
              <TrendingContentContainer data-testid="trending">
                <TrendingCard isDarkThemeOn={isDarkThemeOn}>
                  <TrendingIconContainer isDarkThemeOn={isDarkThemeOn}>
                    <HiFire />
                  </TrendingIconContainer>
                  <TrendingCardTitle isDarkThemeOn={isDarkThemeOn}>
                    Trending
                  </TrendingCardTitle>
                </TrendingCard>
                <TrendingVideosList>
                  {videos.map(eachItem => (
                    <TrendingVideoCard
                      isDarkThemeOn={isDarkThemeOn}
                      videoCard={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </TrendingVideosList>
              </TrendingContentContainer>
            )
          }

          const renderTrendingPageFailureView = () => (
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

          const renderTrendingPage = () => {
            switch (status) {
              case trendingVideosApiStatus.loading:
                return renderLoadingContainer()
              case trendingVideosApiStatus.failure:
                return renderTrendingPageFailureView()
              case trendingVideosApiStatus.success:
                return renderTrendingPageSuccessContainer()
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <TrendingBgContainer isDarkThemeOn={isDarkThemeOn}>
                <SideBarMenuContainer>
                  <SideBarContainer />
                </SideBarMenuContainer>
                {renderTrendingPage()}
              </TrendingBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingRoute
