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
          <TitleText>TOP HQs</TitleText>
        </ShopTitle>
      </TitleContainer>
    </HeroBannerSection>
  );
}
