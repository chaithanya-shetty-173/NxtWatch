import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  ResponsiveContainer,
  FormContainer,
  Logo,
  InputContainer,
  Label,
  Input,
  ShowInput,
  ShowPasswordContainer,
  ShowLabel,
  LoginButton,
  ErrorText,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtContext'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    ShowPassword: false,
    ErrorMessage: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = ErrorMessage => {
    this.setState({showErrorMessage: true, ErrorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      ShowPassword: !prevState.ShowPassword,
    }))
  }

  renderUsername = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeOn} = value
        const {username} = this.state
        return (
          <InputContainer>
            <Label isDark={isDarkThemeOn} htmlFor="username">
              USERNAME
            </Label>
            <Input
              value={username}
              onChange={this.onChangeUsername}
              isDark={isDarkThemeOn}
              id="username"
              placeholder="Username"
              type="text"
            />
          </InputContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderPassword = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeOn} = value
        const {password, ShowPassword} = this.state
        const inputType = ShowPassword ? 'text' : 'password'
        return (
          <InputContainer>
            <Label isDark={isDarkThemeOn} htmlFor="password">
              PASSWORD
            </Label>
            <Input
              value={password}
              onChange={this.onChangePassword}
              isDark={isDarkThemeOn}
              id="password"
              placeholder="Password"
              type={inputType}
            />
          </InputContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderShowPassword = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeOn} = value
        return (
          <ShowPasswordContainer>
            <ShowInput
              id="show-password"
              type="checkbox"
              onClick={this.onClickShowPassword}
            />
            <ShowLabel isDark={isDarkThemeOn} htmlFor="show-password">
              Show Password
            </ShowLabel>
          </ShowPasswordContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeOn} = value
          const {showErrorMessage, ErrorMessage} = this.state
          const imageLogo = isDarkThemeOn
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <ResponsiveContainer isDark={isDarkThemeOn}>
              <FormContainer
                isDark={isDarkThemeOn}
                onSubmit={this.onSubmitForm}
              >
                <Logo src={imageLogo} alt="website logo" />
                {this.renderUsername()}
                {this.renderPassword()}
                {this.renderShowPassword()}
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMessage && (
                  <ErrorText isDark={isDarkThemeOn}>*{ErrorMessage}</ErrorText>
                )}
              </FormContainer>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
