import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkThemeOn: false,
  selectedOption: '',
  onToggleThemeIcon: () => {},
  changeOption: () => {},
  savedVideosList: [],
  addSavedVideos: () => {},
  removeSavedVideos: () => {},
  likedVideoIdStatusList: [],
  changeLikeStatus: () => {},
})
export default NxtWatchContext
