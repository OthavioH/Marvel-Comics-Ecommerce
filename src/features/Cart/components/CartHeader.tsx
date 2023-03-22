import { Close } from "@mui/icons-material";
import {
  CartClose,
  CartCloseIcon,
  CartRow,
  CartTitle,
} from "../styles/Cart.style";

interface Props {
  handleCloseCart: () => void;
}

export default function CartHeader({ handleCloseCart }: Props) {
  return (
    <CartRow>
      <CartTitle>Cart</CartTitle>
      <CartClose>
        <CartCloseIcon onClick={handleCloseCart} className="spin">
          <Close fontSize="medium" />
        </CartCloseIcon>
      </CartClose>
    </CartRow>
  );
}
