import { api } from "../../config/axios";
import { IGetComicsResponse } from "../models/IGetComicsResponse";
import { MD5 } from "crypto-js";
import { removeComicsWithoutPrice, removeEqualComics } from "../utils/utils";
import { IComic } from "../models/IComic";
import { IStory } from "../models/IStory";
import { IGetComicSeriesResponse } from "../models/IGetSeriesResponse";

export default class ComicService {
  private apikey: string;
  private privateApiKey: string;
  private timestamp: number;
  private hash: string;

  constructor() {
    this.apikey = import.meta.env.VITE_APIKEY;
    this.privateApiKey = import.meta.env.VITE_PRIVATE_APIKEY;
    this.timestamp = new Date().getTime();
    this.hash = MD5(
      this.timestamp + this.privateApiKey + this.apikey
    ).toString();
  }

  public async getComicById(id: number): Promise<IComic> {
    const response = await api.get(
      `/v1/public/comics/${id}?ts=${this.timestamp}&apikey=${this.apikey}&hash=${this.hash}`
    );

    const bodyData = response.data as IGetComicsResponse;
    const comic = bodyData.data.results[0];

    return comic;
  }

  public async getAllComics(page: number, limit?: number): Promise<IComic[]> {
    const defaultLimit = limit ?? 10;

    const response = await api.get(
      this.getAllComicsRequest(page, defaultLimit)
    );

    const bodyData = response.data as IGetComicsResponse;
    const comics = removeComicsWithoutPrice(bodyData.data.results);

    let validComicsLength = comics.length;
    let newPage = page;

    while (validComicsLength < defaultLimit) {
      newPage++;

      const newResponse = await api.get(
        this.getAllComicsRequest(newPage, defaultLimit)
      );

      const newComics = newResponse.data.data.results as IComic[];

      const newComicsFiltered = removeComicsWithoutPrice(newComics);

      const removedClones = removeEqualComics(newComicsFiltered);

      const validComics = removedClones.slice(
        0,
        defaultLimit - validComicsLength
      );

      comics.push(...validComics);

      validComicsLength = comics.length;
    }

    return comics;
  }

  getAllComicsRequest(page: number, limit: number) {
    return `/v1/public/comics?format=comic&formatType=digital comic&noVariants=true&hasDigitalIssue=false&limit=${limit}&offset=${
      10 * (page - 1)
    }&ts=${this.timestamp}&apikey=${this.apikey}&hash=${this.hash}`;
  }

  public async getComicSeries(id: number): Promise<IStory[]> {
    const response = await api.get(
      `v1/public/comics/${id}/stories?ts=${this.timestamp}&apikey=${this.apikey}&hash=${this.hash}&orderBy=modified`
    );

    const bodyData = response.data as IGetComicSeriesResponse;
    const series = bodyData.data.results;

    return series;
  }
}
