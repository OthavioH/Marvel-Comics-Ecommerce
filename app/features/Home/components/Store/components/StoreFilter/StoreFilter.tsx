import { useEffect, useState } from "react";
import {
  FilterButton,
  FilterBySelect,
  FilterContainer,
  FilterName,
  FilterRow,
  FilterTitle,
} from "../../styles/StoreFilter.styles";

import { StoreFilterProps } from "./shared/models/StoreFilterProps";

export default function StoreFilter(props: StoreFilterProps) {
  const [filterBy, setFilterBy] = useState("ascending");

  function changeFilters() {
    props.handleFilterChange({ filterBy: filterBy });
  }

  function handleFilterByChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setFilterBy(event.target.value);
  }

  return (
    <FilterContainer>
      <FilterName>Filter by:</FilterName>
      <FilterBySelect onChange={handleFilterByChange}>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
        <option value="price-ascending">Price ascending</option>
        <option value="price-descending">Price descending</option>
      </FilterBySelect>
      <FilterButton onClick={changeFilters}>FILTER</FilterButton>
    </FilterContainer>
  );
}
