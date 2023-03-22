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

interface Props {
  isOpen: boolean;
  handleCloseCart: () => void;
}

export default function Cart({ isOpen, handleCloseCart }: Props) {
  const [cart, setCart] = useState<ICart>({
    comics: [],
    total: 0,
    totalQuantity: 0,
  });

  const cartService = new CartService();

  useEffect(() => {
    getCart();
  }, [isOpen]);

  return (
    <CartContainer className={isOpen ? "active" : ""}>
      <CartHeader handleCloseCart={handleCloseCart} />
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
    cartService.finishCart().then(() => {
      getCart();
    });
  }

  function clearCart() {
    cartService.clearCart().then(() => {
      getCart();
    });
  }

  function getCart() {
    cartService.getCart().then((cart) => {
      setCart(cart);
    });
  }
}
