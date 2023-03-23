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
          <TitleText>COMICS STORE</TitleText>
        </ShopTitle>
      </TitleContainer>
    </HeroBannerSection>
  );
}
