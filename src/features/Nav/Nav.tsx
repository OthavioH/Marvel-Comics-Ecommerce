import { Link, useLocation } from "react-router-dom";
import {
  Navigator,
  NavOpenCartButton,
  NavPageComponent,
  NavPageMain,
} from "./shared/styles/Nav.styles";

import { ShoppingCart } from "@mui/icons-material";

interface Props {
  isCartOpen: boolean;
  handleOpenCart: () => void;
}

export default function Nav({ isCartOpen, handleOpenCart }: Props) {
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
      <NavOpenCartButton onClick={handleOpenCart}>
        <ShoppingCart fontSize="large" />
      </NavOpenCartButton>
    </Navigator>
  );
}
