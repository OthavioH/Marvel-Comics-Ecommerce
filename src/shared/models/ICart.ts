import { ICartComic } from "./ICartComic";

export interface ICart {
  comics: ICartComic[];
  total: number;
}
