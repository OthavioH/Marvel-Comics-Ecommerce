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
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: ${({ active }) => (active ? "red" : "#e3e2e1")};
  color: whitesmoke;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

export const PaginatorButton = styled.button<{ disabled: boolean }>`
  margin-right: 10px;
  background-color: #e3e2e1;
  color: #0b0d0f;
  border: none;
  border-radius: 20%;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;
