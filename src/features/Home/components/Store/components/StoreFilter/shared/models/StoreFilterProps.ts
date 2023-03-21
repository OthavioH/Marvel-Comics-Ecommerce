import { Filters } from "../../../../../../../../shared/models/Filters";

export interface StoreFilterProps {
  handleFilterChange: (filters: Filters) => void;
}
