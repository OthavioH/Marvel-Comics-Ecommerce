import { useState } from "react";
import {
  FilterTitle,
  MobileFilterButton,
  MobileFilterColapsible,
  MobileFilterContainer,
} from "../../styles/StoreFilter.styles";
import DesktopStoreFilter from "./DesktopStoreFilter";

export default function MobileStoreFilter() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleFilter() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <MobileFilterContainer>
        <MobileFilterColapsible>
          <FilterTitle>Filters</FilterTitle>
          <MobileFilterButton onClick={toggleFilter}>OPEN</MobileFilterButton>
        </MobileFilterColapsible>
        {isOpen && <DesktopStoreFilter />}
      </MobileFilterContainer>
    </div>
  );
}
