import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IComic } from "../../../../../shared/models/IComic";
import { IFilters } from "../../../../../shared/models/IFilters";
import {
  Error,
  Loading,
  PageState,
  Success,
} from "../../../../../shared/models/PageState";
import ComicService from "../../../services/ComicService";
import LoadingComponent from "../../Loading/LoadingComponent";
import Paginator from "../components/Paginator/Paginator";
import { ComicsContainer, ShopComicsContainer } from "../styles/Store.styles";
import ComicItem from "./components/ComicItem";
import LoadingComicsStore from "./components/LoadingComicsStore";

interface ComicsStoreProps {
  filters: IFilters;
  currentPage: number;
}

export default function ComicsStore(props: ComicsStoreProps) {
  const [pageState, setPageState] = useState<PageState>(new Loading());
  const [comics, setComics] = useState<IComic[]>([]);

  const comicService = new ComicService();

  useEffect(() => {
    getComics(props.currentPage);
  }, [props.currentPage]);

  return (
    <ShopComicsContainer>
      {pageState instanceof Loading ? (
        <LoadingComicsStore />
      ) : (
        <ComicsContainer>
          {filterComics().map((comic) => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </ComicsContainer>
      )}
    </ShopComicsContainer>
  );

  function getComics(page: number) {
    setPageState(new Loading());
    comicService
      .getAllComics(page)
      .then((comics) => {
        setComics(comics);
        setPageState(new Success());
      })
      .catch((err) => console.log(err));
  }

  function filterComics() {
    const { filterBy } = props.filters;

    switch (filterBy) {
      case "ascending":
        return comics.sort((a, b) => a.title.localeCompare(b.title));
      case "descending":
        return comics.sort((a, b) => b.title.localeCompare(a.title));
      case "price-ascending":
        return comics.sort(filterByPriceAscending);
      case "price-descending":
        return comics.sort(filterByPriceDescending);
      default:
        return comics;
    }
  }

  function filterByPriceAscending(comic1: IComic, comic2: IComic) {
    let price1 = 0,
      price2 = 0;
    comic1.prices.map((price) => {
      if (price.price >= 1) {
        price1 = price.price;
      }
    });

    comic2.prices.map((price) => {
      if (price.price >= 1) {
        price2 = price.price;
      }
    });

    return price1 - price2;
  }

  function filterByPriceDescending(comic1: IComic, comic2: IComic) {
    let price1 = 0,
      price2 = 0;

    comic1.prices.map((price) => {
      if (price.price >= 0.1) {
        price1 = price.price;
      }
    });

    comic2.prices.map((price) => {
      if (price.price >= 0.1) {
        price2 = price.price;
      }
    });

    return price2 - price1;
  }
}
