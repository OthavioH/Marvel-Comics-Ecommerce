import {
  CartComic,
  CartComicColumn,
  CartComicImage,
  CartComicTitle,
  CartComicPrice,
  CartComicRow,
  CartComicQuantityButton,
  CartComicQuantity,
  CartComicRemoveComic,
} from "../styles/Cart.style";

import { Add, Remove, Delete } from "@mui/icons-material";

import placeholderImage from "../../../assets/images/comic_placeholder.png";
import { ICartComic } from "../../../shared/models/ICartComic";
import CartService from "../services/CartService";
import { useEffect, useState } from "react";

interface Props {
  comic: ICartComic;
}

export default function CartComicItem({ comic }: Props) {
  const [quantity, setQuantity] = useState(comic.quantity);

  const cartService = new CartService();

  return (
    <CartComic>
      <CartComicImage src={comic.thumbnailUrl ?? placeholderImage} />
      <CartComicColumn>
        <CartComicTitle>{comic.title}</CartComicTitle>
        <CartComicPrice>${comic.price.toFixed(2)}</CartComicPrice>
        <CartComicRow>
          {quantity > 1 ? (
            <CartComicQuantityButton
              onClick={() => {
                changeQuantity(quantity - 1);
              }}
            >
              <Remove fontSize="small" />
            </CartComicQuantityButton>
          ) : (
            <CartComicRemoveComic onClick={removeComic}>
              <Delete fontSize="small" />
            </CartComicRemoveComic>
          )}
          <CartComicQuantity>{quantity}</CartComicQuantity>
          <CartComicQuantityButton
            onClick={() => {
              changeQuantity(quantity + 1);
            }}
          >
            <Add fontSize="small" />
          </CartComicQuantityButton>
        </CartComicRow>
      </CartComicColumn>
    </CartComic>
  );

  function changeQuantity(newQuantity: number) {
    setQuantity(newQuantity);
    cartService.updateComicQuantity(comic, newQuantity);
  }

  function removeComic() {
    cartService.removeComicFromCart(comic);
  }
}
