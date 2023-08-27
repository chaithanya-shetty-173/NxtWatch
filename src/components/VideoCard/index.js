import {formatDistanceToNow} from 'date-fns'

import {
  VideoCardContainer,
  VideoCardImage,
  VideoCardDetailsContainer,
  ProfileIcon,
  VideoTitle,
  VideoOtherDetailsContainer,
  ChannelName,
  LinkToRoute,
} from './styledComponent'

import NxtContext from '../../context/NxtContext'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel

  const getTimeAgo = () => {
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    return formattedDate
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDarkThemeOn} = value
        return (
          <LinkToRoute to={`/videos/${id}`}>
            <VideoCardContainer>
              <VideoCardImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardDetailsContainer>
                <ProfileIcon src={profileImageUrl} alt="channel logo" />
                <div>
                  <VideoTitle isDarkThemeOn={isDarkThemeOn}>{title}</VideoTitle>
                  <VideoOtherDetailsContainer>
                    <ChannelName>{name}</ChannelName>
                    <ChannelName>{viewCount}</ChannelName>
                    <ChannelName>{getTimeAgo()}</ChannelName>
                  </VideoOtherDetailsContainer>
                </div>
              </VideoCardDetailsContainer>
            </VideoCardContainer>
          </LinkToRoute>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoCard
