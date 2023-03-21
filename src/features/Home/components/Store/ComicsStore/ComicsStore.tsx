import { useEffect, useState } from "react";
import { Comic } from "../../../../../shared/models/Comic";
import { Filters } from "../../../../../shared/models/Filters";
import { ShopContainer } from "../styles/Store.styles";
import ComicItem from "./components/ComicItem";

import comicsJson from "../../../../../shared/mocks/comics.json";

interface ComicsStoreProps {
  filters: Filters;
}

export default function ComicsStore(props: ComicsStoreProps) {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    setComics(comicsJson);
  }, [props.filters]);

  function filterComics() {
    const { filterBy } = props.filters;

    switch (filterBy) {
      case "ascending":
        return comics.sort((a, b) => a.title.localeCompare(b.title));
      case "descending":
        return comics.sort((a, b) => b.title.localeCompare(a.title));
      case "price-ascending":
        return comics.sort((a, b) => a.price - b.price);
      case "price-descending":
        return comics.sort((a, b) => b.price - a.price);
      default:
        return comics;
    }
  }

  return (
    <ShopContainer>
      {filterComics().map((comic) => (
        <ComicItem comic={comic} key={comic.id} />
      ))}
    </ShopContainer>
  );
}
