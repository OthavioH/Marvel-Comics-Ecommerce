import styled from "styled-components";

export const ReceiptWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;

  &.active {
    display: flex;
  }

  &.inactive {
    display: none;
  }
`;

export const ReceiptContainer = styled.div`
  width: 25rem;
  min-height: 60vh;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  background-color: var(--primary);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ReceiptHeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ReceiptTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ReceiptHeaderRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReceiptThanksText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
`;

export const ReceiptCloseButton = styled.div`
  background: none;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
`;

export const ReceiptComic = styled.div`
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

export const ReceiptComicImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;

export const ReceiptComicColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  gap: 5px;
`;

export const ReceiptComicTitle = styled.div`
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

export const ReceiptComicPrice = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
`;

export const ReceiptComicQuantityContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReceiptComicQuantity = styled.p`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ReceiptList = styled.div`
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

export const ReceiptFooter = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex: 5;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
`;

export const ReceiptTotal = styled.p`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 3px;
  color: whitesmoke;
`;
