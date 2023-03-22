import { useState } from "react";
import {
  PageNumber,
  PageNumberContainer,
  PaginatorButton,
  PaginatorButtonContainer,
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
      >
        {i}
      </PageNumber>
    );
  }

  return (
    <PaginatorContainer>
      <PageNumberContainer>{pageNumbers}</PageNumberContainer>
      <PaginatorButtonContainer>
        <PaginatorButton
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <ChevronLeft fontSize="large" />
        </PaginatorButton>
        <PaginatorButton
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          <ChevronRight fontSize="large" />
        </PaginatorButton>
      </PaginatorButtonContainer>
    </PaginatorContainer>
  );
}
