import { useState } from "react";
import Cart from "./features/Cart/Cart";
import { CartWrapper } from "./features/Cart/styles/Cart.style";
import Nav from "./features/Nav/Nav";
import Router from "./routes/router";
import { Main } from "./shared/styles/styles";

export default function MainContainer() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Main>
      <Nav isCartOpen={isCartOpen} handleOpenCart={handleOpenCart} />
      <Router />
      {isCartOpen && (
        <CartWrapper>
          <Cart isOpen={isCartOpen} handleCloseCart={handleOpenCart} />
        </CartWrapper>
      )}
    </Main>
  );

  function handleOpenCart() {
    setIsCartOpen(!isCartOpen);
  }
}
