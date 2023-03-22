import styled from "styled-components";

export const BuyComicContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BuyComicPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-right: 30px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const BuyComicButton = styled.button`
  width: auto;
  padding: 10px 10px 6px;
  height: auto;
  border: none;
  border-radius: 6px;
  background-color: #354040;
  color: #fff;
  cursor: pointer;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;

  transition: 0.2s;

  &:hover {
    background-color: #2f4847;
    color: #fff;
  }
`;

export const BuyQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding-right: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BuyQuantityLabel = styled.p`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #e3e3e1;
  width: 50px;
  text-align: center;
`;

export const BuyQuantityButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: #e3e3e1;
  color: #181d20;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export const BuyQuantityButtonHover = styled(BuyQuantityButton)`
  &:hover {
    box-shadow: 0 0 0 2px #b0443d;
  }
`;
