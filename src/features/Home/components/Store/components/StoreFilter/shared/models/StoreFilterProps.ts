import { IFilters } from "../../../../../../../../shared/models/IFilters";

export interface StoreFilterProps {
  handleFilterChange: (filters: IFilters) => void;
}
