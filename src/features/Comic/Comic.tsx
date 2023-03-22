import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IComic } from "../../shared/models/IComic";
import { Loading, PageState, Success } from "../../shared/models/PageState";
import ComicService from "../../shared/services/ComicService";
import ComicFirstSection from "./components/ComicFirstSection/ComicFirstSection";
import ComicSecondSection from "./components/ComicSecondSection/ComicSecondSection";
import { ComicSection } from "./styles/Comic.styles";

export default function Comic() {
  const [comic, setComic] = useState<IComic>();
  const [pageState, setPageState] = useState<PageState>(new Loading());

  const routeParams = useParams();
  const comicService = new ComicService();

  useEffect(() => {
    getComic();
  }, []);

  if (pageState instanceof Success) {
    return (
      <ComicSection>
        <ComicFirstSection comic={comic} />
        <ComicSecondSection comic={comic} />
      </ComicSection>
    );
  }

  return <div>Loading...</div>;

  function getComic() {
    const { id: comicID } = routeParams;

    if (comicID) {
      comicService
        .getComicById(+comicID)
        .then((comic) => {
          console.log(comic);

          setComic(comic);
          setPageState(new Success());
        })
        .catch((err) => {
          console.log(err);
          setPageState(new Error());
        });
    }
  }
}