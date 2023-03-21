import { StoreSection } from "./styles/Store.styles";
import ComicsStore from "./ComicsStore/ComicsStore";
import StoreFilter from "./components/StoreFilter/StoreFilter";
import { Filters } from "../../../../shared/models/Filters";
import { useState } from "react";

export default function Store() {
  const [filters, setFilters] = useState<Filters>({ filterBy: "ascending" });

  function handleFilterChange(updatedFilters: Filters) {
    console.log("trocou o filtro", updatedFilters);

    setFilters(updatedFilters);
  }

  return (
    <StoreSection>
      <StoreFilter handleFilterChange={handleFilterChange} />
      <ComicsStore filters={filters} />
    </StoreSection>
  );
}
