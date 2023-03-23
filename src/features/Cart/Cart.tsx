import { useEffect, useState } from "react";

import {
  CartClearButton,
  CartContainer,
  CartFinishButton,
  CartList,
  CartTotal,
} from "./styles/Cart.style";

import { ICart } from "../../shared/models/ICart";
import CartComicItem from "./components/CartComicItem";
import CartHeader from "./components/CartHeader";
import EmptyCart from "./components/EmptyCart";
import CartService from "./services/CartService";
import CartFooter from "./components/CartFooter";
import { Subscription } from "rxjs/internal/Subscription";

interface Props {
  isOpen: boolean;
  changeCartState: () => void;
  changeReceiptState: () => void;
}

export default function Cart({
  isOpen,
  changeCartState,
  changeReceiptState,
}: Props) {
  const [cart, setCart] = useState<ICart>({
    comics: [],
    total: 0,
    totalQuantity: 0,
  });

  const cartService = new CartService();

  useEffect(() => {
    const subscription = cartService.getCart().subscribe((cart) => {
      setCart(cart);
    });

    return () => subscription.unsubscribe();
  }, [cartService.hasCartBeenUpdated]);

  return (
    <CartContainer className={isOpen ? "active" : ""}>
      <CartHeader changeCartState={changeCartState} />
      {cart.totalQuantity > 0 ? (
        <>
          <CartList>
            {cart.comics.map((comic) => {
              return <CartComicItem comic={comic} key={comic.id} />;
            })}
          </CartList>
          <CartFooter
            cart={cart}
            clearCart={clearCart}
            finishCart={finishCart}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </CartContainer>
  );

  function finishCart() {
    cartService.finishCart();
    changeReceiptState();
    changeCartState();
  }

  function clearCart() {
    cartService.clearCart();
  }
}
