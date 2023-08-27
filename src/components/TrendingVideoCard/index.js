import {formatDistanceToNow} from 'date-fns'
import {
  TrendingVideoCardContainer,
  TrendingVideoThumbnail,
  TrendingVideoContent,
  TrendingVideoTitle,
  TrendingVideoChannel,
  LinkToRoute,
} from './styledComponent'

const TrendingVideoCard = props => {
  const {videoCard, isDarkThemeOn} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoCard
  const getTimeAgo = () => {
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    return formattedDate
  }
  return (
    <LinkToRoute to={`/videos/${id}`}>
      <TrendingVideoCardContainer>
        <TrendingVideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <TrendingVideoContent>
          <TrendingVideoTitle isDarkThemeOn={isDarkThemeOn}>
            {title}
          </TrendingVideoTitle>
          <TrendingVideoChannel>{channel.name}</TrendingVideoChannel>
          <TrendingVideoChannel>
            {viewCount} views . {getTimeAgo()} ago
          </TrendingVideoChannel>
        </TrendingVideoContent>
      </TrendingVideoCardContainer>
    </LinkToRoute>
  )
}

export default TrendingVideoCard
