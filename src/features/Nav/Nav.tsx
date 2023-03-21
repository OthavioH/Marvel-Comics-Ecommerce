import {
  Navigator,
  NavPageComponent,
  NavPageMain,
} from "./shared/styles/Nav.styles";

export default function Nav() {
  return (
    <Navigator>
      <NavPageMain>
        <NavPageComponent className="active">Home</NavPageComponent>
        <NavPageComponent>HQs</NavPageComponent>
      </NavPageMain>
    </Navigator>
  );
}
