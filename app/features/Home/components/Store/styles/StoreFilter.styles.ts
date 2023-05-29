import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 15rem;
  background-color: #1a1d1f;

  justify-content: center;
  align-items: center;

  gap: 20px;
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: var(--accent-color);

  border-color: transparent;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #101213;

  margin: 10px 0;
  padding: 0 10px;
  cursor: pointer;

  align-self: flex-end;

  font-size: 0.8rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;

  &:hover {
    box-shadow: none;
  }
`;

export const FilterTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: whitesmoke;
  text-align: center;
  margin: 2px 0;
  letter-spacing: 3px;
`;

export const FilterName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: whitesmoke;
  text-align: start;
`;

export const FilterBySelect = styled.select`
  width: auto;
  height: 40px;
  background-color: #e3e3e1;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.8rem;
  font-weight: 800;
  color: #1a2025;
  text-align: start;
`;

export const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MobileFilterContainer = styled.div`
  width: 100%;
  min-height: 60px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const MobileFilterCollapsible = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const MobileFilterButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  background-color: #1a2025;
  color: whitesmoke;
`;
