import {
  ShopComics,
  ShopComicsImage,
  ShopComicsPrice,
  ShopComicsTitle,
} from "../../styles/Store.styles";

import comicCover from "../../../../../../assets/images/comic_cover.png";

export default function ComicItem() {
  return (
    <ShopComics>
      <ShopComicsImage src={comicCover} />
      <ShopComicsTitle>Capitão América: O Primeiro Vingador</ShopComicsTitle>
      <ShopComicsPrice>R$299,99</ShopComicsPrice>
    </ShopComics>
  );
}
