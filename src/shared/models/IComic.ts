export interface IComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: ITextObject[];
  resourceURI: string;
  urls: IUrl[];
  series: ISeries;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: IDate[];
  prices: IPrice[];
  thumbnail: IThumbnail;
  images: IImage[];
  creators: ICreator;
  characters: ICharacter;
  stories: IStory;
  events: IEvent;
}

interface ITextObject {
  type: string;
  language: string;
  text: string;
}

interface IUrl {
  type: string;
  url: string;
}

interface ISeries {
  resourceURI: string;
  name: string;
}

interface IDate {
  type: string;
  date: string;
}

export interface IPrice {
  type: string;
  price: number;
}

interface IThumbnail {
  path: string;
  extension: string;
}

interface IImage {
  path: string;
  extension: string;
}

interface IItem {
  resourceURI: string;
  name: string;
  type?: string;
}

interface ICreator {
  available: number;
  collectionURI: string;
  items: IItem[];
  returned: number;
}

interface ICharacter {
  available: number;
  collectionURI: string;
  items: IItem[];
  returned: number;
}

interface IStory {
  available: number;
  collectionURI: string;
  items: IItem[];
  returned: number;
}

interface IEvent {
  available: number;
  collectionURI: string;
  items: IItem[];
  returned: number;
}
