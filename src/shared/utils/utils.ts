import { IComic } from "../models/IComic";

export function removeComicsWithoutPrice(comics: IComic[]) {
  const newComics = comics.filter((comic) => {
    const price = comic.prices.find((price) => price.price >= 1);

    if (price) return true;

    return false;
  });

  return newComics;
}
