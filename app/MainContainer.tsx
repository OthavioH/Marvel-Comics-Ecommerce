import { useState } from "react";
import Cart from "./features/Cart/Cart";
import { CartWrapper } from "./features/Cart/styles/Cart.style";
import Nav from "./features/Nav/Nav";
import Receipt from "./features/Receipt/Receipt";
import Router from "./routes/router";
import { Main } from "./shared/styles/styles";

export default function MainContainer() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);

  return (
    <Main>
      <Nav handleOpenCart={changeCartState} />
      <Router />
      {isCartOpen && (
        <CartWrapper>
          <Cart
            isOpen={isCartOpen}
            changeCartState={changeCartState}
            changeReceiptState={changeReceiptState}
          />
        </CartWrapper>
      )}
      {isReceiptOpen && (
        <Receipt
          isOpen={isReceiptOpen}
          changeReceiptState={changeReceiptState}
        />
      )}
    </Main>
  );

  function changeReceiptState() {
    setIsReceiptOpen(!isReceiptOpen);
  }

  function changeCartState() {
    setIsCartOpen(!isCartOpen);
  }
}
