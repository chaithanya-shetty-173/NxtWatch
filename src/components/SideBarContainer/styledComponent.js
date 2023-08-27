import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 90vh;
  background-color: ${props => (props.isDarkThemeOn ? '#313131' : '#ffffff')};
`
export const NavLinksContainer = styled.ul`
  list-style-type: none;
  margin-top: 16px;
  padding: 0px;
`
export const NavLinkButton = styled.button`
  display: flex;
  align-items: center;
  width: 220px;
  border: none;
  background-color: ${props =>
    props.isSelected ? props.background : 'transparent'};
  font-weight: ${props => (props.isSelected ? 700 : 'normal')};
  color: ${props => (props.isSelected ? '#ff0000' : '#606060')};
`
export const NavLinkIconContainer = styled.div`
display:flex;
align-items:center:
justify-content:center;
width:20%;
font-size:18px;`

export const NavLinkText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#212121')};
  width: 80%;
  text-align: left;
`
export const LinkRoute = styled(Link)`
  text-decoration: none;
`
export const FooterContainer = styled.div`
  padding: 16px;
`
export const FooterTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  margin-bottom: 20px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`
export const SocialMediaIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const FooterDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkThemeOn ? '#ffffff' : '#475569')};
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0;
`
