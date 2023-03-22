import { IComic } from "../../../../shared/models/IComic";
import {
  ComicDescription,
  ComicDescriptionColumn,
  SectionTitle,
} from "../../styles/Comic.styles";

interface Props {
  comic?: IComic;
}

export default function ComicSecondSection({ comic }: Props) {
  return (
    <>
      <ComicDescriptionColumn>
        <SectionTitle>FROM {comic?.series.name} SERIES</SectionTitle>
      </ComicDescriptionColumn>
      {comic?.description && (
        <ComicDescriptionColumn>
          <SectionTitle>Description</SectionTitle>
          <ComicDescription>{comic?.description}</ComicDescription>
        </ComicDescriptionColumn>
      )}
    </>
  );
}
