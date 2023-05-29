import styled from "styled-components";

export const ComicSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: var(--primary);
  color: #fff;
  flex-wrap: wrap;
`;

export const ComicInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  align-items: start;
  height: 100%;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ComicDescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  flex: 3;
  height: 100%;
  padding: 20px;
  gap: 20px;
`;

export const ComicTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
`;

export const SectionTitle = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const ComicDescription = styled.div`
  width: 100%;
  font-size: 24px;
  text-align: justify;
  color: #e3e3e1;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ComicImage = styled.img`
  width: 500px;
  height: 700px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;
