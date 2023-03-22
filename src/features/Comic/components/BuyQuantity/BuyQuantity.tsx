import {
  BuyQuantityButton,
  BuyQuantityContainer,
  BuyQuantityLabel,
} from "../../styles/BuyComic.styles";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

interface Prop {
  handleChangePrice: (quantity: number) => void;
}

export default function BuyQuantity({ handleChangePrice }: Prop) {
  const [quantity, setQuantity] = useState(1);

  return (
    <BuyQuantityContainer>
      <BuyQuantityButton
        onClick={() => {
          setQuantity(quantity - 1);
          handleChangePrice(quantity - 1);
        }}
        disabled={quantity === 1}
      >
        <Remove fontSize="medium" />
      </BuyQuantityButton>
      <BuyQuantityLabel>{quantity}</BuyQuantityLabel>
      <BuyQuantityButton
        onClick={() => {
          setQuantity(quantity + 1);
          handleChangePrice(quantity + 1);
        }}
        disabled={quantity === 10}
      >
        <Add fontSize="medium" />
      </BuyQuantityButton>
    </BuyQuantityContainer>
  );
}
