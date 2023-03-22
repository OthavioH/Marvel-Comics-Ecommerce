import {
  ShopComics,
  ShopComicsImage,
  ShopComicsPrice,
  ShopComicsTitle,
} from "../../styles/Store.styles";

import { IComic, IPrice } from "../../../../../../shared/models/IComic";
import { Link } from "react-router-dom";

interface ComicItemProps {
  comic: IComic;
}

export default function ComicItem(props: ComicItemProps) {
  const price = getPrice(props.comic.prices);

  function getPrice(prices: IPrice[]): IPrice {
    if (prices[0].price >= 1) return prices[0];

    const price: IPrice[] | IPrice =
      prices.find((price) => price.price >= 1) || prices[0];

    if (price instanceof Array) {
      return price[0];
    }
    return price;
  }

  return (
    <Link to={`comic/${props.comic.id}`}>
      <ShopComics>
        <ShopComicsImage
          src={`${props.comic.thumbnail.path}.${props.comic.thumbnail.extension}`}
        />
        <ShopComicsTitle>{props.comic.title}</ShopComicsTitle>
        <ShopComicsPrice>Price: ${+price.price}</ShopComicsPrice>
      </ShopComics>
    </Link>
  );
}
