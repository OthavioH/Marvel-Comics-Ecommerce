import {
  HeroBannerSection,
  ShopTitle,
  TitleContainer,
  TitleText,
} from "./styles/HomeBanner.styles";

export default function HomeBanner() {
  return (
    <HeroBannerSection>
      <TitleContainer>
        <ShopTitle>
          <TitleText>Marvel Comics</TitleText>
        </ShopTitle>
      </TitleContainer>
    </HeroBannerSection>
  );
}
