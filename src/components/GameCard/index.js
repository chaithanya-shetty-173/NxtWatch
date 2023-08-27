import {
  GameCardBgContainer,
  GameCardImage,
  GameCardVideoTitle,
  GameCardVideoCount,
  LinkToRoute,
} from './styledComponent'

const GameCard = props => {
  const {videoCard, isDarkThemeOn} = props
  const {id, title, thumbnailUrl, viewCount} = videoCard
  return (
    <LinkToRoute to={`/videos/${id}`}>
      <GameCardBgContainer>
        <GameCardImage src={thumbnailUrl} alt="video thumbnail" />
        <GameCardVideoTitle isDarkTheme={isDarkThemeOn}>
          {title}
        </GameCardVideoTitle>
        <GameCardVideoCount>{viewCount} Watching Worldwide</GameCardVideoCount>
      </GameCardBgContainer>
    </LinkToRoute>
  )
}

export default GameCard
