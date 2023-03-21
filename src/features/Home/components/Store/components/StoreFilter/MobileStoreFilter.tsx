import { useState } from "react";
import {
  FilterTitle,
  MobileFilterButton,
  MobileFilterCollapsible,
  MobileFilterContainer,
} from "../../styles/StoreFilter.styles";
import DesktopStoreFilter from "./DesktopStoreFilter";
import { StoreFilterProps } from "./shared/models/StoreFilterProps";

import { FilterAlt, FilterAltOff } from "@mui/icons-material";

export default function MobileStoreFilter(props: StoreFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleFilter() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <MobileFilterContainer>
        <MobileFilterCollapsible>
          <MobileFilterButton onClick={toggleFilter}>
            {isOpen ? (
              <FilterAlt fontSize="large" />
            ) : (
              <FilterAltOff fontSize="large" />
            )}
          </MobileFilterButton>
        </MobileFilterCollapsible>
        {isOpen && (
          <DesktopStoreFilter handleFilterChange={props.handleFilterChange} />
        )}
      </MobileFilterContainer>
    </div>
  );
}
