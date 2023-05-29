import styled from "styled-components";

export const Navigator = styled.nav`
  display: flex;
  width: 100%;
  height: 75px;
  background-color: var(--primary);
  padding: 0px 15px;
`;

export const NavPageMain = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const NavPageComponent = styled.li`
  display: inline;
  float: left;
  width: 100px;
  height: 50px;
  margin: 16px 10px 2px 0px;
  padding: 8px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    background-color: rgb(45, 53, 57);
  }

  &:hover:not(.active) {
    background-color: rgb(45, 53, 57);
  }
`;

export const NavOpenCartButton = styled.button`
  display: inline;
  float: right;
  width: 100px;
  height: 50px;
  margin: 16px 0px 2px 0px;
  padding: 8px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
