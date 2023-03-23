import styled from "styled-components";

export const ReceiptWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.2);

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
  background-color: #181d20;
`;

export const ReceiptHeader = styled.div`
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

export const ReceiptWelcomeText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ReceiptCloseButton = styled.div`
  background: none;
  border: none;
  outline: none;
  color: #fff;
`;
