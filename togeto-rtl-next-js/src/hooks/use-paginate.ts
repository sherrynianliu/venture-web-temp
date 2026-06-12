'use client';

import { useEffect, useState } from 'react';

interface PaginationResult<T> {
  currentItems: T[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
}

function usePaginate<T>(items: T[], itemsPerPage: number): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState<number>(0);

  // Reset current page to 0 when items change
  useEffect(() => {
    setCurrentPage(0);
  }, [items]);

  const safeItemsPerPage = Math.max(itemsPerPage, 1);
  const pageCount = Math.ceil(items.length / safeItemsPerPage);
  const startIndex = currentPage * safeItemsPerPage;
  const endIndex = startIndex + safeItemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    currentItems,
    pageCount,
    handlePageClick,
  };
}

export default usePaginate;
