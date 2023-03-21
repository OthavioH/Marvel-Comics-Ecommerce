import { api } from "../../../config/axios";
import { IGetComicsResponse } from "../../../shared/models/IGetComicsResponse";
import { MD5 } from "crypto-js";
import { removeComicsWithoutPrice } from "../../../shared/utils/utils";
import { IComic } from "../../../shared/models/IComic";

export default class ComicService {
  public async getAllComics(page: number, limit?: number): Promise<IComic[]> {
    const defaultLimit = limit ?? 10;

    const actualLimit = defaultLimit * page;

    const apikey = import.meta.env.VITE_APIKEY;
    const privateApiKey = import.meta.env.VITE_PRIVATE_APIKEY;
    const timestamp = new Date().getTime();

    const hash = MD5(timestamp + privateApiKey + apikey).toString();

    const response = await api.get(
      `/v1/public/comics?format=comic&formatType=digital comic&noVariants=true&hasDigitalIssue=false&ts=${timestamp}&apikey=${apikey}&hash=${hash}`,
      {
        params: {
          limit: defaultLimit,
          offset: 10 * (page - 1),
        },
      }
    );

    const bodyData = response.data as IGetComicsResponse;
    const comics = bodyData.data.results;

    const comicsWithPriceLength = removeComicsWithoutPrice(comics).length;

    if (comicsWithPriceLength < actualLimit) {
      const newPage = page + 1;
      const newLimit = actualLimit - comicsWithPriceLength;
      const newComics = await this.getAllComics(newPage, newLimit);

      const allComics = [...comics, ...newComics];

      return allComics;
    }

    return bodyData.data.results;
  }
}
