import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'

import NxtWatchContext from './context/NxtContext'

import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    isDarkThemeOn: false,
    selectedOption: 'HOME',
    savedVideosList: [],
    likedVideoIdStatusList: [],
  }

  addSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  removeSavedVideos = videoDetails => {
    const {id} = videoDetails
    const {savedVideosList} = this.state
    const updatedSavedVideosList = savedVideosList.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideosList: updatedSavedVideosList})
  }

  changeLikeStatus = (id, status) => {
    const {likedVideoIdStatusList} = this.state
    const videoIdObject = likedVideoIdStatusList.find(
      eachItem => eachItem.id === id,
    )
    if (videoIdObject === undefined) {
      this.setState(prevState => ({
        likedVideoIdStatusList: [
          ...prevState.likedVideoIdStatusList,
          {id, status},
        ],
      }))
    } else {
      this.setState(prevState => ({
        likedVideoIdStatusList: prevState.likedVideoIdStatusList.map(
          eachObj => {
            if (eachObj.id === id) {
              return {...eachObj, status}
            }
            return eachObj
          },
        ),
      }))
    }
  }

  onToggleThemeIcon = () => {
    this.setState(prevState => ({isDarkThemeOn: !prevState.isDarkThemeOn}))
  }

  changeOption = option => {
    this.setState({selectedOption: option})
  }

  render() {
    const {
      isDarkThemeOn,
      selectedOption,
      savedVideosList,
      likedVideoIdStatusList,
    } = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkThemeOn,
          onToggleThemeIcon: this.onToggleThemeIcon,
          selectedOption,
          changeOption: this.changeOption,
          savedVideosList,
          addSavedVideos: this.addSavedVideos,
          removeSavedVideos: this.removeSavedVideos,
          likedVideoIdStatusList,
          changeLikeStatus: this.changeLikeStatus,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
