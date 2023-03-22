import styled from "styled-components";

export const PaginatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #181d20;
  padding: 10px;
`;

export const PageNumber = styled.button<{ active: boolean }>`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: ${({ active }) => (active ? "#0b0d0f" : "transparent")};
  color: whitesmoke;
  border: none;
  border-radius: 20%;
  cursor: pointer;
  font-size: 2rem;
`;

export const PaginatorButton = styled.button<{ disabled: boolean }>`
  margin-right: 10px;
  background-color: #e3e2e1;
  color: #000;
  border: none;
  border-radius: 20%;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;
