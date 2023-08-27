import styled from 'styled-components'

export const NavbarBgContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: ${props => (props.isDarkThemeOn ? '#313131' : '#ffffff')};
`

export const Logo = styled.img`
  height: 24px;
`
export const ThemeButton = styled.button`
  font-size: 22px;
  margin-left: auto;
  margin-right: 16px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#000000')};
`
export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
