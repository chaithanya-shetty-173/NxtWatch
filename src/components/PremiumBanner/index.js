import {AiOutlineClose} from 'react-icons/ai'
import {
  PremiumBannerContainer,
  CloseButton,
  PremiumBannerLogo,
  PremiumBannerText,
  GetItButton,
} from './styledComponent'

const PremiumBanner = props => {
  const {closeBanner} = props

  const onClickClose = () => {
    closeBanner()
  }

  return (
    <PremiumBannerContainer data-testid="banner">
      <div>
        <PremiumBannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PremiumBannerText>
          Buy Nxt Watch Premium prepaid plans with UPI
        </PremiumBannerText>
        <GetItButton>GET IT NOW</GetItButton>
      </div>
      <CloseButton type="button" onClick={onClickClose} data-testid="close">
        <AiOutlineClose />
      </CloseButton>
    </PremiumBannerContainer>
  )
}

export default PremiumBanner
