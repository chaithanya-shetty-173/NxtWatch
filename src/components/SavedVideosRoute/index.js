import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBarContainer from '../SideBarContainer'
import TrendingVideoCard from '../TrendingVideoCard'

import NxtWatchContext from '../../context/NxtContext'

import {
  SavedVideosBgContainer,
  SavedVideosListContainer,
  SavedVideosList,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  LoaderBgContainer,
  FailureViewImage,
  ErrorText,
  ErrorDescription,
  SideBarMenuContainer,
} from './styledComponent'

const SavedVideosRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkThemeOn, savedVideosList} = value

      const renderHeading = () => (
        <SavedVideosHeadingContainer isDarkThemeOn={isDarkThemeOn}>
          <SavedVideosIconContainer isDarkThemeOn={isDarkThemeOn}>
            <MdPlaylistAdd />
          </SavedVideosIconContainer>
          <SavedVideosHeading isDarkThemeOn={isDarkThemeOn}>
            Saved Videos
          </SavedVideosHeading>
        </SavedVideosHeadingContainer>
      )

      const renderGamingPageFailureView = () => (
        <LoaderBgContainer>
          <FailureViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <ErrorText isDarkThemeOn={isDarkThemeOn}>
            No saved videos found
          </ErrorText>
          <ErrorDescription>
            You can save your videos while watching them
          </ErrorDescription>
        </LoaderBgContainer>
      )

      const renderVideosList = () => (
        <SavedVideosList>
          {savedVideosList.map(eachItem => (
            <TrendingVideoCard
              isDarkThemeOn={isDarkThemeOn}
              videoCard={eachItem}
              key={eachItem.id}
            />
          ))}
        </SavedVideosList>
      )

      return (
        <>
          <Header />
          <SavedVideosBgContainer
            isDarkThemeOn={isDarkThemeOn}
            data-testid="savedVideos"
          >
            <SideBarMenuContainer>
              <SideBarContainer />
            </SideBarMenuContainer>
            {savedVideosList.length === 0 ? (
              renderGamingPageFailureView()
            ) : (
              <SavedVideosListContainer>
                {renderHeading()}
                {renderVideosList()}
              </SavedVideosListContainer>
            )}
          </SavedVideosBgContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideosRoute
