import { ICartComic } from "./ICartComic";

export interface ICart {
  comics: ICartComic[];
  totalQuantity: number;
  total: number;
}
