import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const StoreSection = styled.section`
  display: flex;
  min-height: 50rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--primary);
`;

export const ShopComicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  min-width: 20rem;
  height: fit-content;
  gap: 25px;
  padding: 10px;
`;

export const ComicsContainer = styled.div`
  display: grid;
  width: 100vw;
  height: fit-content;

  padding: 0px 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  }
`;

export const ShopComicsStyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const ShopComics = styled.div`
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  text-decoration: none;
`;

export const ShopComicsImage = styled.img`
  width: 100%;
  height: 80%;
  background-color: #0b0d0f;
  border-radius: 10px;
  object-fit: cover;
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
  height: 80%;
  border-radius: 10px;
  content: "";
  width: 100%;
  height: 200%;
  background-color: rgba(255, 255, 255, 0.4);
  animation: ${shine} 1s linear infinite;
`;

export const ShopComicsTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: whitesmoke;
  text-align: center;
  margin: 2px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }
`;

export const ShopComicsPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: whitesmoke;
  text-align: center;
  margin: 10px 0;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }
`;
