import { IComic } from "./IComic";

export interface IGetComicsResponse {
  code: number;
  status: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: IComic[];
  };
  copyright: string;
}
