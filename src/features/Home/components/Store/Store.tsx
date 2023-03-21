import { StoreSection } from "./styles/Store.styles";
import ComicsStore from "./ComicsStore/ComicsStore";
import StoreFilter from "./components/StoreFilter/StoreFilter";
import { IFilters } from "../../../../shared/models/IFilters";
import { useState } from "react";
import Paginator from "./components/Paginator/Paginator";

export default function Store() {
  const [filters, setFilters] = useState<IFilters>({ filterBy: "ascending" });

  function handleFilterChange(updatedFilters: IFilters) {
    setFilters(updatedFilters);
  }

  return (
    <StoreSection>
      <StoreFilter handleFilterChange={handleFilterChange} />
      <ComicsStore filters={filters} />
    </StoreSection>
  );
}
