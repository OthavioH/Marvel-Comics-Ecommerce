import { Close } from "@mui/icons-material";
import {
  CartClose,
  CartCloseIcon,
  CartRow,
  CartTitle,
} from "../styles/Cart.style";

interface Props {
  changeCartState: () => void;
}

export default function CartHeader({ changeCartState }: Props) {
  return (
    <CartRow>
      <CartTitle>Cart</CartTitle>
      <CartClose>
        <CartCloseIcon onClick={changeCartState} className="spin">
          <Close fontSize="medium" />
        </CartCloseIcon>
      </CartClose>
    </CartRow>
  );
}
