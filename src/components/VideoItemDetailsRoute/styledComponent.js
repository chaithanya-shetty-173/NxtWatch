import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoDetailedBgContainer = styled.div`
  display: flex;
  min-height: 90vh;
  background-color: ${props => (props.isDarkThemeOn ? '#0f0f0f' : '#f9f9f9')};
`

export const ReactPlayerElement = styled(ReactPlayer)`
  margin-bottom: 24px;
`

export const VideoPlayerContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  height: 90vh;
  padding: 32px 24px;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#1e293b')};
  font-weight: 500;
  margin-bottom: 14px;
`
export const LikeAndSaveContainer = styled.div`
  display: flex;
`
export const VideoDetailsViewsAndTime = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #64748b;
  font-weight: 400;
  margin: 8px 0;
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;
`
export const UserActionButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 8px;
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isSaved ? '#2563eb  ' : '#64748b')};
  font-weight: 500;
  display: flex;
  align-items: center;
`
export const LikeButton = styled(UserActionButton)`
  color: ${props => (props.likeStatus === 'LIKE' ? '#2563eb  ' : '#64748b')};
`

export const DisLikeButton = styled(UserActionButton)`
  color: ${props => (props.likeStatus === 'DISLIKE' ? '#2563eb  ' : '#64748b')};
`

export const UserActionIconContainer = styled.span`
  font-size: 16px;
  margin-right: 4px;
  display: flex;
  align-items: center;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  background-color: #d7dfe9;
  border: 1px solid #d7dfe9;
  margin: 16px 0;
`
export const ChannelContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  margin-right: 12px;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#1e293b')};
  font-weight: ${props => (props.isDarkThemeOn ? '400' : '500')};
  margin: 0 0 8px;
`
export const SubscribersCount = styled.p`
  font-family: Roboto;
  font-size: 10px;
  color: #616e7c;
  font-weight: 400;
  margin: 0 0 24px;
`
export const Description = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#475569')};
  font-weight: ${props => (props.isDarkThemeOn ? '300' : '400')};
`
export const LoaderBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-grow: 1;
`

export const FailureViewImage = styled.img`
  width: 280px;
`
export const ErrorText = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkThemeOn ? '#ebebeb' : '#1e293b')};
  margin-bottom: 16px;
`
export const ErrorDescription = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 16px;
  margin-top: 0;
`
export const RetryButton = styled.button`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 84px;
  height: 32px;
  background-color: #4f46e5;
`
export const SideBarMenuContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
