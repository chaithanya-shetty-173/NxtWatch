import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  width: 250px;
  margin: 10px 15px 15px 0px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const VideoCardImage = styled.img`
  width: 100%;
  margin-bottom: 5px;
`
export const VideoCardDetailsContainer = styled.div`
  display: flex;
  padding: 4px;
`
export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 14px;
`

export const VideoTitle = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#1e293b')};
  font-weight: ${props => (props.isDarkThemeOn ? '400' : '500')};
  line-height: 1.7;
  margin: 0;
`
export const VideoOtherDetailsContainer = styled.div`
  display: flex;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #616e7c;
  font-weight: 400;
  margin: 8px 10px 8px 0px;
`
export const LinkToRoute = styled(Link)`
  text-decoration: none;
`
