import styled from "styled-components";

export const Navigator = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 55px;
  background-color: var(--primary);
  padding: 0px 15px;

  align-items: center;
`;

export const NavPageMain = styled.ul`
  display: flex;
  flex-direction: row;

  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  justify-content: flex-start;
  align-items: center;
`;

export const NavPageComponent = styled.li`
  display: flex;
  float: left;
  width: 100px;
  height: auto;

  justify-content: center;
  align-items: center;

  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #171c1c;
  }
`;

export const NavOpenCartButton = styled.button`
  display: flex;
  float: right;

  min-width: 130px;
  width: auto;
  height: 70%;

  justify-content: center;
  align-items: center;
  font-family: "Bebas";
  font-size: 20px;

  color: #000;
  background: white;
  border: transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #171c1c;
    color: white;
  }
`;
