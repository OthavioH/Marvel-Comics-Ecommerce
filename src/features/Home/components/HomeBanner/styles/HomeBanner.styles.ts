import styled from "styled-components";

import homeBG from "../../../../../assets/images/home_banner_169.png";

export const HeroBannerSection = styled.section`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  min-height: 30rem;
  height: 60%;
  width: 100%;
  background-color: white;

  background-image: url(${homeBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 500px) {
    background-size: 100vw 100%;
    min-height: 15rem;
  }

  @media (min-width: 1400px) {
    background-image: url(${homeBG});
    background-size: 100% 50vh;
  }
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
  border-bottom: 55px solid #181d20;
`;

export const TitleText = styled.p`
  color: white;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 6px;
  padding-top: 5px;

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    font-size: 25px;
    padding-top: 10px;
  }

  @media (min-width: 601px) and (max-width: 1000px) {
    font-size: 30px;
  }
`;
