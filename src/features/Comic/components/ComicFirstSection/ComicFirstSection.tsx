import { IComic } from "../../../../shared/models/IComic";
import {
  ComicImage,
  ComicInfoColumn,
  ComicTitle,
} from "../../styles/Comic.styles";

interface Props {
  comic?: IComic;
}

export default function ComicFirstSection({ comic }: Props) {
  return (
    <ComicInfoColumn>
      <ComicTitle>{comic?.title}</ComicTitle>
      <ComicImage
        src={`${comic?.thumbnail.extension}.${comic?.thumbnail.path}`}
      />
    </ComicInfoColumn>
  );
}
