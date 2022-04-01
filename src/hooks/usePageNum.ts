import { useMemo } from 'react';

export const usePageNum = ({
  totalResults,
  limit,
  currentPage,
}: {
  totalResults: number;
  limit: number;
  currentPage: number;
}) => {
  return useMemo(() => {
    const lastPageNum = Math.ceil(totalResults / limit);
    const pageStartNum = Math.max(currentPage - 2, 1);
    const pageEndNum = Math.min(currentPage + 2, lastPageNum);
    const pageLength = pageEndNum - pageStartNum + 1;
    const moreThanFirst = currentPage > 3;
    const lessThanLast =currentPage < lastPageNum - 2
    return { pageStartNum, pageEndNum, moreThanFirst, lessThanLast, pageLength };
  }, [currentPage, totalResults, limit]);
};
