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
}

export default function BuyComic({ comicPrice }: Props) {
  const defaultPrice = comicPrice;
  const [price, setPrice] = useState(defaultPrice);

  return (
    <>
      <BuyComicContainer>
        <BuyQuantity handleChangePrice={handleChangePrice} />
        <BuyComicPrice>${price.toFixed(2)}</BuyComicPrice>
        <BuyComicButton>
          <AddShoppingCart fontSize="large" />
        </BuyComicButton>
      </BuyComicContainer>
    </>
  );

  function handleChangePrice(quantity: number) {
    setPrice(quantity * defaultPrice);
  }
}
