import styled from "styled-components";

import homeBG from "../../../../../../public/images/home_banner.png";

export const HeroBannerSection = styled.section`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  min-height: 50rem;
  height: 60%;
  width: 100%;
  background-color: white;

  background: linear-gradient(to bottom, #181d20, black 100%, #181d20);

  @media (min-width: 1400px) {
    min-height: 55rem;
  }
`;

export const HeroBanner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  z-index: 2;

  background-image: url(${homeBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  justify-content: end;
  align-items: center;
`;

export const ShopTitle = styled.div`
  max-width: 500px;
  width: 60%;
  height: 75px;

  border-top: 30px solid transparent;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 55px solid #0b0d0f;
`;

export const TitleText = styled.p`
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;

  @media (max-width: 500px) {
    font-size: 20px;
    padding-top: 10px;
  }
`;
