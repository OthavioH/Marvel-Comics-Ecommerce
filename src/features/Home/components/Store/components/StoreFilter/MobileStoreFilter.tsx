import { useState } from "react";
import {
  FilterTitle,
  MobileFilterButton,
  MobileFilterColapsible,
  MobileFilterContainer,
} from "../../styles/StoreFilter.styles";
import DesktopStoreFilter from "./DesktopStoreFilter";
import { StoreFilterProps } from "./shared/models/StoreFilterProps";

export default function MobileStoreFilter(props: StoreFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleFilter() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <MobileFilterContainer>
        <MobileFilterColapsible>
          <FilterTitle>Filters</FilterTitle>
          <MobileFilterButton onClick={toggleFilter}>
            {isOpen ? "CLOSE" : "OPEN"}
          </MobileFilterButton>
        </MobileFilterColapsible>
        {isOpen && (
          <DesktopStoreFilter handleFilterChange={props.handleFilterChange} />
        )}
      </MobileFilterContainer>
    </div>
  );
}
