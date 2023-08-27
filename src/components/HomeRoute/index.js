import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import PremiumBanner from '../PremiumBanner'
import VideoCard from '../VideoCard'

import NxtContext from '../../context/NxtContext'
import SideBarContainer from '../SideBarContainer'

import {
  HomePageContainer,
  HomePageRightSideContainer,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderBgContainer,
  FailureBgContainer,
  FailureImage,
  ErrorText,
  ErrorDescription,
  RetryButton,
  VideosListContainer,
  SideBarMenuContainer,
} from './styedComponent'

const VideosUrlStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {
    showPremiumBanner: true,
    status: VideosUrlStatus.loading,
    videosList: [],
    search: '',
  }

  closeBannerContainer = () => {
    this.setState(prevState => ({
      showPremiumBanner: !prevState.showPremiumBanner,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
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

  getVideosList = async () => {
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const VideosUrlResponse = await fetch(homeVideosApiUrl, options)
    if (VideosUrlResponse.ok) {
      const VideosData = await VideosUrlResponse.json()
      const updatedData = this.snakeToCamel(VideosData)
      this.setState({videosList: updatedData, status: VideosUrlStatus.success})
    } else {
      this.setState({status: VideosUrlStatus.failure})
    }
  }

  componentDidMount = () => {
    this.getVideosList()
  }

  onClickSearchButton = () => {
    this.setState({status: VideosUrlStatus.loading}, this.getVideosList)
  }

  render() {
    const {showPremiumBanner, status, search, videosList} = this.state

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDarkThemeOn} = value

          const renderNoVideosView = () => (
            <FailureBgContainer>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <ErrorText isDarkThemeOn={isDarkThemeOn}>
                No Search results found
              </ErrorText>
              <ErrorDescription>
                Try different key words or remove search filter
              </ErrorDescription>
              <RetryButton type="button" onClick={this.onClickSearchButton}>
                Retry
              </RetryButton>
            </FailureBgContainer>
          )

          const renderSuccessContainer = () => {
            const {videos, total} = videosList
            if (total === 0) {
              return renderNoVideosView()
            }
            return (
              <VideosListContainer>
                {videos.map(eachVideo => (
                  <VideoCard videoDetails={eachVideo} key={eachVideo.id} />
                ))}
              </VideosListContainer>
            )
          }

          const renderFailureContainer = () => (
            <FailureBgContainer>
              <FailureImage
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
              <RetryButton type="button" onClick={this.onClickSearchButton}>
                Retry
              </RetryButton>
            </FailureBgContainer>
          )

          const renderLoadingContainer = () => (
            <LoaderBgContainer>
              <Loader
                type="ThreeDots"
                color={isDarkThemeOn ? '#ffffff' : '#3b82f6'}
                height="50"
                width="50"
              />
            </LoaderBgContainer>
          )

          const renderHomePage = () => {
            switch (status) {
              case VideosUrlStatus.loading:
                return renderLoadingContainer()
              case VideosUrlStatus.failure:
                return renderFailureContainer()
              case VideosUrlStatus.success:
                return renderSuccessContainer()
              default:
                return null
            }
          }

          const renderSearchContainer = () => (
            <SearchContainer isDarkThemeOn={isDarkThemeOn}>
              <SearchInput
                type="search"
                placeholder="Search"
                isDarkThemeOn={isDarkThemeOn}
                value={search}
                onChange={this.onChangeSearchInput}
              />
              <SearchButton
                isDarkThemeOn={isDarkThemeOn}
                onClick={this.onClickSearchButton}
                data-testid="searchButton"
              >
                <AiOutlineSearch />
              </SearchButton>
            </SearchContainer>
          )

          return (
            <>
              <Header />
              <HomePageContainer
                isDarkThemeOn={isDarkThemeOn}
                data-testid="home"
              >
                <SideBarMenuContainer>
                  <SideBarContainer />
                </SideBarMenuContainer>
                <HomePageRightSideContainer>
                  {showPremiumBanner ? (
                    <PremiumBanner closeBanner={this.closeBannerContainer} />
                  ) : (
                    ''
                  )}
                  <VideosContainer>
                    {renderSearchContainer()}
                    {renderHomePage()}
                  </VideosContainer>
                </HomePageRightSideContainer>
              </HomePageContainer>
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default HomeRoute
