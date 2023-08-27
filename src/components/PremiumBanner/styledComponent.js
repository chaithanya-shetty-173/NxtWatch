import styled from 'styled-components'

export const PremiumBannerContainer = styled.div`
  min-width: 300px;
  display: flex;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 22px;
  justify-content: space-between;
  height: 30%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  align-self: flex-start;
`
export const PremiumBannerLogo = styled.img`
  height: 25px;
`
export const PremiumBannerText = styled.p`
  font-size: 15px;
  color: #424242;
  font-family: 'Roboto';
  font-weight: 500;
  width: 90%;
  margin-bottom: 32px;
`
export const GetItButton = styled.button`
  height: 28px;
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  border: 2px solid #313131;
  border-radius: 2px;
  width: 90px;
  color: #313131;
  font-family: 'Roboto';
  padding: 0 8px;
`
