import { useEffect, useState } from "react";
import { IComic } from "../../../../shared/models/IComic";
import { IStory } from "../../../../shared/models/IStory";
import ComicService from "../../../../shared/services/ComicService";
import {
  ComicDescription,
  ComicDescriptionColumn,
  SectionTitle,
} from "../../styles/Comic.styles";
import ComicStories from "../ComicStories/ComicStories";

interface Props {
  comic?: IComic;
}

export default function ComicSecondSection({ comic }: Props) {
  const [comicSeries, setComicSeries] = useState<IStory[]>([]);

  const comicService = new ComicService();

  useEffect(() => {
    getComicSeries();
  }, []);

  return (
    <>
      {comic?.description && (
        <ComicDescriptionColumn>
          <SectionTitle>Description</SectionTitle>
          <ComicDescription>{comic?.description}</ComicDescription>
        </ComicDescriptionColumn>
      )}
      <ComicDescriptionColumn>
        <SectionTitle>FROM {comic?.series.name} SERIES</SectionTitle>
        <ComicStories series={comicSeries} />
      </ComicDescriptionColumn>
    </>
  );

  async function getComicSeries() {
    await comicService
      .getComicSeries(comic!.id)
      .then((series) => {
        setComicSeries(series);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
