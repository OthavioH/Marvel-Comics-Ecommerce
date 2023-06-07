import { IComic } from "../models/IComic";

import placeholderImg from "../../assets/images/comic_placeholder.png";

export function removeComicsWithoutPrice(comics: IComic[]) {
  const comicsWithPrice = comics.filter((comic) => {
    const price = comic.prices.find((price) => price.price >= 1);

    if (price) return true;

    return false;
  });

  return comicsWithPrice;
}

export function removeEqualComics(comics: IComic[]) {
  const comicsWithoutEqual = comics.filter((comic, index) => {
    const firstIndex = comics.findIndex((comic) => comic.id === comic.id);

    if (firstIndex === index) return true;

    return false;
  });

  return comicsWithoutEqual;
}

export function getImageUrl(path: string | null) {
  if (path) {
    if (path!.includes("image_not_available")) {
      return placeholderImg;
    }
    return path;
  }
  return placeholderImg;
}
