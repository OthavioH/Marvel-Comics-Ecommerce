import { IStory } from "./IStory";

export interface IGetComicSeriesResponse {
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
    results: IStory[];
  };
  copyright: string;
}
