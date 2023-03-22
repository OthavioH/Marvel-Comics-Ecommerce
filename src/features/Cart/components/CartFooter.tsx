import { ICart } from "../../../shared/models/ICart";
import {
  CartClearButton,
  CartFinishButton,
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
      <CartFinishButton onClick={finishCart}>Finish</CartFinishButton>
      <CartClearButton onClick={clearCart}>Clear</CartClearButton>
    </>
  );
}
