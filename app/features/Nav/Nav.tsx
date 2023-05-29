import { Link, useLocation } from "react-router-dom";
import {
  Navigator,
  NavOpenCartButton,
  NavPageComponent,
  NavPageMain,
} from "./shared/styles/Nav.styles";

import { ShoppingCart, Home } from "@mui/icons-material";

interface Props {
  handleOpenCart: () => void;
}

export default function Nav({ handleOpenCart }: Props) {
  const location = useLocation();
  const isStore = location.pathname === "/store";

  return (
    <Navigator>
      <NavPageMain>
        {!isStore && (
          <Link to="/store">
            <NavPageComponent>
              <Home fontSize="large" />
            </NavPageComponent>
          </Link>
        )}
      </NavPageMain>
      <NavOpenCartButton onClick={handleOpenCart}>CART</NavOpenCartButton>
    </Navigator>
  );
}
