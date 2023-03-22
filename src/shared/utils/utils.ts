import { IComic } from "../models/IComic";

import placeholderImg from "../../assets/images/comic_placeholder.png";

export function removeComicsWithoutPrice(comics: IComic[]) {
  const newComics = comics.filter((comic) => {
    const price = comic.prices.find((price) => price.price >= 1);

    if (price) return true;

    return false;
  });

  return newComics;
}

export function getImageUrl(path: string) {
  if (path.includes("image_not_available")) {
    return placeholderImg;
  }
  return path;
}
