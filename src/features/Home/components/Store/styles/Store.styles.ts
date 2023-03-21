import styled from "styled-components";

export const StoreSection = styled.section`
  display: flex;
  min-height: 50rem;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  background-color: #181d20;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: start;
  }
`;

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 5;
  min-width: 20rem;
  height: fit-content;
  gap: 25px;

  @media (max-width: 800px) {
    min-width: 100%;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

export const ShopComics = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 450px;

  @media (min-width: 2000px) {
    width: 300px;
    height: 600px;
  }
`;

export const ShopComicsImage = styled.img`
  width: 100%;
  height: 80%;
  background-color: #0b0d0f;
  border-radius: 10px;
  object-fit: cover;
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
`;

export const ShopComicsPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: whitesmoke;
  text-align: center;
  margin: 10px 0;
`;
