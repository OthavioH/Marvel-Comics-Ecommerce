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
  addToCart: () => void;
  handleChangeQuantity: (quantity: number) => void;
  handleResetQuantity: () => void;
  comicQuantity: number;
}

export default function BuyComic({
  comicPrice,
  addToCart,
  handleChangeQuantity,
  handleResetQuantity,
  comicQuantity,
}: Props) {
  const defaultPrice = comicPrice;
  const [price, setPrice] = useState(defaultPrice);

  return (
    <>
      <BuyComicContainer>
        <BuyQuantity
          quantity={comicQuantity}
          handleChangePrice={handleChangePrice}
        />
        <BuyComicPrice>${price.toFixed(2)}</BuyComicPrice>
        <BuyComicButton
          onClick={() => {
            addToCart();
            handleResetQuantity();
            handleChangePrice(1);
          }}
        >
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
