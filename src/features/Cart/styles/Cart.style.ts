import styled, { keyframes } from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  top: 5px;
  right: 0;
  bottom: 0;
  width: 300px;
  height: fit-content;
  z-index: 999;

  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }

  &.active {
    display: flex;
  }

  &.inactive {
    display: none;
  }
`;

export const CartContainer = styled.div`
  display: fixed;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  max-height: 70vh;

  background-color: #181d20;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 100%;
  }

  &.active {
    display: flex;
  }
`;

export const CartTitle = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const CartClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: fit-content;
  padding: 0 20px;
  flex: 1;
  cursor: pointer;
`;

export const CartCloseIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 50%;
  position: relative;

  &.spin {
    animation: spin 0.5s linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 2px;
    background-color: #000;
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 10px;
    background-color: #000;
  }
`;

export const CartRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  overflow-y: auto;
  min-height: 10rem;
  padding: 10px;
  gap: 20px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 10px;
  }
`;

export const CartComic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: fit-content;
  gap: 20px;
  padding: 10px;
  border-radius: 6px;
  background-color: #cccec7;
`;

export const CartComicColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  gap: 5px;
`;

export const CartComicRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 5px;
`;

export const CartComicTitle = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CartComicQuantity = styled.div`
  width: fit-content;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CartComicQuantityButton = styled.button`
  width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    font-size: 12px;
  }
`;

export const CartComicRemoveComic = styled.div`
  width: 20px;
  height: 20px;
  color: red;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #000;
  }

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    font-size: 12px;
  }
`;

export const CartComicPrice = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
`;

export const CartComicImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
`;

export const CartTotal = styled.div`
  width: 100%;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 20px;
  padding-bottom: 5px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CartTotalPrice = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 20px;
`;

export const CartFooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const CartFinishButton = styled.button`
  width: 40%;
  height: 40px;
  background-color: whitesmoke;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CartClearButton = styled.button`
  width: 40%;
  height: 40px;
  background-color: #b0443d;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CartEmpty = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 20px;
  padding-bottom: 5px;
  text-align: center;
`;
