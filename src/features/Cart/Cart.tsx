import {
  CartClearButton,
  CartClose,
  CartCloseIcon,
  CartContainer,
  CartFinishButton,
  CartList,
  CartRow,
  CartTitle,
  CartTotal,
} from "./styles/Cart.style";

import { Close } from "@mui/icons-material";

export interface Props {
  isOpen: boolean;
  handleCloseCart: () => void;
}

export function Cart({ isOpen, handleCloseCart }: Props) {
  return (
    <CartContainer className={isOpen ? "active" : ""}>
      <CartRow>
        <CartTitle>Cart</CartTitle>
        <CartClose>
          <CartCloseIcon onClick={handleCloseCart} className="spin">
            <Close fontSize="medium" />
          </CartCloseIcon>
        </CartClose>
      </CartRow>
      <CartList></CartList>
      <CartTotal>Total: $9,99</CartTotal>
      <CartFinishButton>Finish</CartFinishButton>
      <CartClearButton>Clear</CartClearButton>
    </CartContainer>
  );
}
