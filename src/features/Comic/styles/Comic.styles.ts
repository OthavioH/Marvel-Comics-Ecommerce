import styled from "styled-components";

export const ComicSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  height: 100%;
`;

export const ComicInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 50%;
  height: 100%;
  padding: 20px;
  gap: 20px;
`;

export const ComicTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
`;

export const SectionTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`;

export const ComicDescription = styled.div`
  width: 100%;
  font-size: 14px;
`;

export const ComicImage = styled.img`
  width: 50%;
  height: 200px;
  object-fit: cover;
`;
