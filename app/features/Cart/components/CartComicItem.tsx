import {
  CartComic,
  CartComicColumn,
  CartComicImage,
  CartComicTitle,
  CartComicPrice,
  CartComicRow,
  CartComicAddQuantity,
  CartComicQuantity,
  CartComicRemoveComic,
  CartComicMinusQuantity,
} from "../styles/Cart.style";

import { Add, Remove, Delete } from "@mui/icons-material";

import { ICartComic } from "../../../shared/models/ICartComic";
import CartService from "../services/CartService";
import { useState } from "react";
import { getImageUrl } from "../../../shared/utils/utils";

interface Props {
  comic: ICartComic;
}

export default function CartComicItem({ comic }: Props) {
  const [quantity, setQuantity] = useState(comic.quantity);

  const cartService = new CartService();

  return (
    <CartComic>
      <CartComicImage src={getImageUrl(comic.thumbnailUrl!)} />
      <CartComicColumn>
        <CartComicTitle>{comic.title}</CartComicTitle>
        <CartComicPrice>
          ${(comic.price * comic.quantity).toFixed(2)}
        </CartComicPrice>
        <CartComicRow>
          {quantity > 1 ? (
            <CartComicMinusQuantity
              onClick={() => {
                changeQuantity(quantity - 1);
              }}
            ></CartComicMinusQuantity>
          ) : (
            <CartComicRemoveComic onClick={removeComic}>
              <Delete fontSize="small" />
            </CartComicRemoveComic>
          )}
          <CartComicQuantity>{quantity}</CartComicQuantity>
          <CartComicAddQuantity
            onClick={() => {
              changeQuantity(quantity + 1);
            }}
          ></CartComicAddQuantity>
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