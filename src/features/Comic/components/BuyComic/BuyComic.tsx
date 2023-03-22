import { useState } from "react";
import {
  BuyComicButton,
  BuyComicContainer,
  BuyComicPrice,
} from "../../styles/BuyComic.styles";
import BuyQuantity from "../BuyQuantity/BuyQuantity";
import { AddShoppingCart } from "@mui/icons-material";

interface Props {
  comicPrice: number;
  handleChangeQuantity: (quantity: number) => void;
  addToCart: () => void;
}

export default function BuyComic({
  comicPrice,
  handleChangeQuantity,
  addToCart,
}: Props) {
  const defaultPrice = comicPrice;
  const [price, setPrice] = useState(defaultPrice);

  return (
    <>
      <BuyComicContainer>
        <BuyQuantity handleChangePrice={handleChangePrice} />
        <BuyComicPrice>${price.toFixed(2)}</BuyComicPrice>
        <BuyComicButton onClick={addToCart}>
          <AddShoppingCart fontSize="large" />
        </BuyComicButton>
      </BuyComicContainer>
    </>
  );

  function handleChangePrice(quantity: number) {
    handleChangeQuantity(quantity);
    setPrice(quantity * defaultPrice);
  }
}
