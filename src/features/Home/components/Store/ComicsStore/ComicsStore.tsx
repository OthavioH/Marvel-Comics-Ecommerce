import { useEffect, useState } from "react";
import { IComic } from "../../../../../shared/models/IComic";
import { IFilters } from "../../../../../shared/models/IFilters";
import { removeComicsWithoutPrice } from "../../../../../shared/utils/utils";
import ComicService from "../../../services/ComicService";
import Paginator from "../components/Paginator/Paginator";
import { ComicsContainer, ShopComicsContainer } from "../styles/Store.styles";
import ComicItem from "./components/ComicItem";

interface ComicsStoreProps {
  filters: IFilters;
}

export default function ComicsStore(props: ComicsStoreProps) {
  const [comics, setComics] = useState<IComic[]>([]);

  const comicService = new ComicService();

  useEffect(() => {
    comicService
      .getAllComics(1)
      .then((comics) => setComics(comics))
      .catch((err) => console.log(err));
  }, [props.filters]);

  return (
    <ShopComicsContainer>
      <Paginator
        totalPages={5}
        currentPage={1}
        onPageChange={handlePageChange}
      />
      <ComicsContainer>
        {filterComics().map((comic) => (
          <ComicItem comic={comic} key={comic.id} />
        ))}
      </ComicsContainer>
    </ShopComicsContainer>
  );

  function handlePageChange(page: number) {
    console.log(`Switching to page ${page}`);
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
