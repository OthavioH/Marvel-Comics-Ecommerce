import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 15rem;
  width: 100%;
  height: fit-content;
  background-color: #1a2025;
  gap: 20px;
  padding: 10px;

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
  background-color: #e3e3e1;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.3s;
  align-self: flex-end;

  font-size: 0.8rem;
  font-weight: 800;
  color: #1a2025;
  text-align: center;
  letter-spacing: 1px;
`;

export const FilterTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: whitesmoke;
  text-align: center;
  margin: 2px 0;
  letter-spacing: 3px;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

export const FilterName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: whitesmoke;
  text-align: start;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #d1d5db;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #04aa6d;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const MobileFilterContainer = styled.div`
  width: 100%;
  min-height: 60px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #1a2025;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const MobileFilterColapsible = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const MobileFilterButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
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
  text-align: center;
  letter-spacing: 1px;
`;
