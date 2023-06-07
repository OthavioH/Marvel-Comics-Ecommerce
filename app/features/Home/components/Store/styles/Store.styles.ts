import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const StoreSection = styled.section`
  display: flex;
  min-height: 50rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  background-color: var(--primary);
`;

export const ShopComicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  min-width: 20rem;
  height: 100%;
  gap: 25px;
  padding: 10px;
`;

export const ComicsContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;

  padding: 0px 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: 50px;
  }
`;

export const ShopComicsStyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const ShopComics = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #16181a;
  color: #fff;
  text-decoration: none;

  box-shadow: 2px 2px 10px #000;
  border-radius: 10px;
`;

export const ShopComicsImage = styled.img`
  width: 100%;
  height: 20rem;
  background-color: none;
  object-fit: fill;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const shine = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadingShopComicsImage = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 10px;
  content: "";
  background-color: rgba(255, 255, 255, 0.4);
  animation: ${shine} 1s linear infinite;
`;

export const ShopComicsTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 100;
  color: #fff;
  text-align: center;
  margin: 2px 0;
  white-space: break-spaces;

  padding: 0px 20px;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const ShopComicsPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin: 10px 0;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }
`;
