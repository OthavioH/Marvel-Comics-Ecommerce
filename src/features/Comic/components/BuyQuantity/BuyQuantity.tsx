import {
  BuyQuantityButton,
  BuyQuantityContainer,
  BuyQuantityLabel,
} from "../../styles/BuyComic.styles";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

interface Prop {
  handleChangePrice: (quantity: number) => void;
  quantity: number;
}

export default function BuyQuantity({ handleChangePrice, quantity }: Prop) {
  return (
    <BuyQuantityContainer>
      <BuyQuantityButton
        onClick={() => {
          handleChangePrice(quantity - 1);
        }}
        disabled={quantity === 1}
      >
        <Remove fontSize="medium" />
      </BuyQuantityButton>
      <BuyQuantityLabel>{quantity}</BuyQuantityLabel>
      <BuyQuantityButton
        onClick={() => {
          handleChangePrice(quantity + 1);
        }}
        disabled={quantity === 10}
      >
        <Add fontSize="medium" />
      </BuyQuantityButton>
    </BuyQuantityContainer>
  );
}
