import {
  ReceiptContainer,
  ReceiptList,
  ReceiptWrapper,
  ReceiptFooter,
  ReceiptTotal,
} from "./styles/Receipt.styles";

import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import CartService from "../Cart/services/CartService";
import { ICart } from "../../shared/models/ICart";
import ReceiptComicItem from "./components/ReceiptComicItem";
import ReceiptHeader from "./components/ReceiptHeader";

export interface Props {
  isOpen: boolean;
  changeReceiptState: () => void;
}

export default function Receipt({ isOpen, changeReceiptState }: Props) {
  const [cart, setCart] = useState<ICart>();
  const cartService: CartService = new CartService();

  useEffect(() => {
    const subscription = cartService.getCart().subscribe((cart) => {
      setCart(cart);
    });

    return () => subscription.unsubscribe();
  }, [cartService.hasCartBeenUpdated]);

  return (
    <ReceiptWrapper
      className={isOpen ? "active" : "inactive"}
      onClick={finishCart}
    >
      <ReceiptContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ReceiptHeader finishCart={finishCart} />
        <ReceiptList>
          {cart?.comics.map((comic) => {
            return <ReceiptComicItem comic={comic} key={comic.id} />;
          })}
        </ReceiptList>
        <ReceiptFooter>
          <ReceiptTotal>Total: ${cart?.total.toFixed(2)}</ReceiptTotal>
        </ReceiptFooter>
      </ReceiptContainer>
    </ReceiptWrapper>
  );

  function finishCart() {
    changeReceiptState();
    cartService.finishCart();
  }
}
