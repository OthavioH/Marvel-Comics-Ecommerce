import { useState } from "react";
import {
  PageNumber,
  PaginatorButton,
  PaginatorContainer,
} from "../../styles/Paginator.style";

import { ChevronRight, ChevronLeft } from "@mui/icons-material";

interface PaginatorProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Paginator({
  totalPages,
  currentPage,
  onPageChange,
}: PaginatorProps) {
  const [page, setPage] = useState(currentPage);

  function handlePageChange(page: number) {
    setPage(page);
    onPageChange(page);
  }

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <PageNumber
        key={i}
        active={i === page}
        onClick={() => handlePageChange(i)}
      ></PageNumber>
    );
  }

  return (
    <PaginatorContainer>
      <PaginatorButton
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <ChevronLeft fontSize="large" />
      </PaginatorButton>
      {pageNumbers}
      <PaginatorButton
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <ChevronRight fontSize="large" />
      </PaginatorButton>
      {/* <PageNumberContainer></PageNumberContainer>
      <PaginatorButtonContainer>
        
      </PaginatorButtonContainer> */}
    </PaginatorContainer>
  );
}
