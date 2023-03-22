export interface ICartComic {
  id: number;
  title: string;
  description: string;
  thumbnail: IThumbnail;
  price: number;
  quantity: number;
}

interface IThumbnail {
  path: string;
  extension: string;
}
