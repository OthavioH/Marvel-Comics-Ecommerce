import {
  HeroBanner,
  HeroBannerSection,
  ShopTitle,
  TitleContainer,
  TitleText,
} from "../../shared/styles/Home.styles";

export default function HomeBanner() {
  return (
    <HeroBannerSection>
      <TitleContainer>
        <ShopTitle>
          <TitleText>TOP HQs</TitleText>
        </ShopTitle>
      </TitleContainer>
      <HeroBanner />
    </HeroBannerSection>
  );
}
