import { IComic } from "../../../../shared/models/IComic";
import {
  ComicImage,
  ComicInfoColumn,
  ComicTitle,
} from "../../styles/Comic.styles";
import BuyComic from "../BuyComic/BuyComic";

interface Props {
  comic?: IComic;
}

export default function ComicFirstSection({ comic }: Props) {
  return (
    <ComicInfoColumn>
      <ComicTitle>{comic?.title}</ComicTitle>
      <ComicImage
        src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
      />
      <BuyComic comicPrice={comic?.prices[0].price || 0}></BuyComic>
    </ComicInfoColumn>
  );
}
