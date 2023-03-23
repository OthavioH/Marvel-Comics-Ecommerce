import { ICreator, IThumbnail } from "./IComic";

export interface IStory {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: IThumbnail;
  comics: Comic;
  creators: ICreator;
  events: IEvent[];
  characters: ICharacter[];
  originalIssue: OriginalIssue;
}

interface ICharacter {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

interface IEvent {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

interface OriginalIssue {
  resourceURI: string;
  name: string;
}

interface Comic {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

interface ComicItem {
  resourceURI: string;
  name: string;
}
