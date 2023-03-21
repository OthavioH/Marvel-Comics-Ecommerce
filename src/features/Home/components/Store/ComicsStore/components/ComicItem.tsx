import {
  ShopComics,
  ShopComicsImage,
  ShopComicsPrice,
  ShopComicsTitle,
} from "../../styles/Store.styles";

import { Comic } from "../../../../../../shared/models/Comic";

interface ComicItemProps {
  comic: Comic;
}

export default function ComicItem(props: ComicItemProps) {
  return (
    <ShopComics>
      <ShopComicsImage src={props.comic.thumbnailPath} />
      <ShopComicsTitle>{props.comic.title}</ShopComicsTitle>
      <ShopComicsPrice>{+props.comic.price}</ShopComicsPrice>
    </ShopComics>
  );
}
