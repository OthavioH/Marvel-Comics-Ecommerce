import { Link, useLocation } from "react-router-dom";
import {
  Navigator,
  NavPageComponent,
  NavPageMain,
} from "./shared/styles/Nav.styles";

export default function Nav() {
  const location = useLocation();
  const isStore = location.pathname === "/store";

  return (
    <Navigator>
      <NavPageMain>
        <Link to="/store">
          <NavPageComponent className={isStore ? "active" : ""}>
            Home
          </NavPageComponent>
        </Link>
        <NavPageComponent>HQs</NavPageComponent>
      </NavPageMain>
    </Navigator>
  );
}
