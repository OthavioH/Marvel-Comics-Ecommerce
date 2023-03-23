import { ICart } from "../../../shared/models/ICart";
import {
  CartClearButton,
  CartFinishButton,
  CartFooterRow,
  CartTotal,
} from "../styles/Cart.style";

interface Props {
  cart: ICart;
  finishCart: () => void;
  clearCart: () => void;
}

export default function CartFooter({ cart, clearCart, finishCart }: Props) {
  return (
    <>
      <CartTotal>Total: ${cart.total.toFixed(2)}</CartTotal>
      <CartFooterRow>
        <CartClearButton onClick={clearCart}>Clear</CartClearButton>
        <CartFinishButton onClick={finishCart}>Finish</CartFinishButton>
      </CartFooterRow>
    </>
  );
}
