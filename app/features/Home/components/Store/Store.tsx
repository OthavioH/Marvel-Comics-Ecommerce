import { StoreSection } from "./styles/Store.styles";
import ComicsStore from "./ComicsStore/ComicsStore";
import StoreFilter from "./components/StoreFilter/StoreFilter";
import { IFilters } from "../../../../shared/models/IFilters";
import { useEffect, useState } from "react";
import Paginator from "./components/Paginator/Paginator";
import { useLocation, useNavigate } from "react-router-dom";

export default function Store() {
  const [filters, setFilters] = useState<IFilters>({ filterBy: "ascending" });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    initCurrentPage();
  }, [currentPage]);

  return (
    <StoreSection>
      <StoreFilter handleFilterChange={handleFilterChange} />
      <Paginator
        totalPages={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <ComicsStore filters={filters} currentPage={currentPage} />
    </StoreSection>
  );

  function handleFilterChange(updatedFilters: IFilters) {
    setFilters(updatedFilters);
  }

  async function initCurrentPage() {
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get("page") || "1";

    setCurrentPage(+page);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  }
}
