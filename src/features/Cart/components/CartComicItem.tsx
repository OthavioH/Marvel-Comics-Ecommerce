import {
  CartComic,
  CartComicColumn,
  CartComicImage,
  CartComicTitle,
  CartComicPrice,
  CartComicRow,
  CartComicQuantityButton,
  CartComicQuantity,
} from "../styles/Cart.style";

import { Add, Remove } from "@mui/icons-material";

import placeholderImage from "../../../assets/images/comic_placeholder.png";
import { ICartComic } from "../../../shared/models/ICartComic";

interface Props {
  comic: ICartComic;
}

export default function CartComicItem({ comic }: Props) {
  return (
    <CartComic>
      <CartComicImage src={comic.thumbnailUrl ?? placeholderImage} />
      <CartComicColumn>
        <CartComicTitle>{comic.title}</CartComicTitle>
        <CartComicPrice>${comic.price.toFixed(2)}</CartComicPrice>
        <CartComicRow>
          <CartComicQuantityButton>
            <Remove fontSize="small" />
          </CartComicQuantityButton>
          <CartComicQuantity>{comic.quantity}</CartComicQuantity>
          <CartComicQuantityButton>
            <Add fontSize="small" />
          </CartComicQuantityButton>
        </CartComicRow>
      </CartComicColumn>
    </CartComic>
  );
}
