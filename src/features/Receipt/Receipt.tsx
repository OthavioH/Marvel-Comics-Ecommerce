import {
  ReceiptCloseButton,
  ReceiptContainer,
  ReceiptHeader,
  ReceiptHeaderRow,
  ReceiptList,
  ReceiptTitle,
  ReceiptThanksText,
  ReceiptWrapper,
} from "./styles/Receipt.styles";

import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import CartService from "../Cart/services/CartService";
import { ICart } from "../../shared/models/ICart";
import ReceiptComicItem from "./components/ReceiptComicItem";

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
      onClick={finishReceipt}
    >
      <ReceiptContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ReceiptHeader>
          <ReceiptHeaderRow>
            <ReceiptTitle>Receipt</ReceiptTitle>
            <ReceiptCloseButton onClick={finishReceipt}>
              <Close fontSize="medium" />
            </ReceiptCloseButton>
          </ReceiptHeaderRow>
          <ReceiptThanksText>Thank you for your purchase!</ReceiptThanksText>
          <ReceiptList>
            {cart?.comics.map((comic) => {
              return <ReceiptComicItem comic={comic} key={comic.id} />;
            })}
          </ReceiptList>
        </ReceiptHeader>
      </ReceiptContainer>
    </ReceiptWrapper>
  );

  function finishReceipt() {
    cartService.finishCart();

    changeReceiptState();
  }
}
