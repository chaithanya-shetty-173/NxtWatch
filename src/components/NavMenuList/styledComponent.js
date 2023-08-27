import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

export const StyledPopup = styled(Popup)`
  &-content {
    width: 100%;
    height: 100%;
    background-color: ${props =>
      props.isDarkThemeOn ? '#313131 ' : '#f9f9f9'};
    text-align: center;
    border-radius: 5px;
    padding: 20px;
  }
`
export const HamBurgerButton = styled.button`
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#000000')};
  background-color: transparent;
  margin-right: 10px;
  border: none;
  outline: none;
  font-size: 30px;
  align-items: center;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  align-self: flex-end;
  margin-right: 40px;
  font-size: 26px;
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#475569')};
`

export const MenuListContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkThemeOn ? '#313131' : '#ffffff')};
`
export const NavLinksContainer = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`

export const BarNavLink = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100vw;
  border: none;
  background-color: ${props =>
    props.isSelected ? props.background : 'transparent'};
  font-weight: ${props => (props.isSelected ? 700 : 'normal')};
  color: ${props => (props.isSelected ? '#ff0000' : '#606060')};
`

export const NavLinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 34px;
  width: 20%;
`

export const NavLinkText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#212121')};
  width: 80%;
  text-align: left;
  font-weight: 500;
`
export const LinkRoute = styled(Link)`
  text-decoration: none;
  width: 100%;
`
