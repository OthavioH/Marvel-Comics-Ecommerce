import { IComic } from "../../../../shared/models/IComic";
import {
  ComicDescription,
  ComicInfoColumn,
  SectionTitle,
} from "../../styles/Comic.styles";

interface Props {
  comic?: IComic;
}

export default function ComicSecondSection({ comic }: Props) {
  return (
    <ComicInfoColumn>
      <SectionTitle>Description</SectionTitle>
      <ComicDescription>{comic?.description}</ComicDescription>
    </ComicInfoColumn>
  );
}
