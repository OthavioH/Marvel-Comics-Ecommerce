import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  min-height: 50rem;
  height: fit-content;
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
