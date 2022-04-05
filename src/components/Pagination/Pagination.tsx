import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { usePageNum } from 'hooks/usePageNum';
import { PaginationProps } from './Pagination.types';
import { StyledPageButton, StyledPaginationControl } from './Pagination.styled';

export const Pagination = ({ limit, currentPage, onClick: handleClick, totalResults }: PaginationProps) => {
  const { pageStartNum, pageEndNum, moreThanFirst, lessThanLast } = usePageNum({ currentPage, totalResults, limit });
  return (
    <StyledPaginationControl>
      <StyledPageButton
        type="button"
        aria-label="Go to previous page."
        onClick={() => {
          if (currentPage === 1) return;
          handleClick(currentPage - 1);
        }}
      >
        <IoIosArrowBack />
      </StyledPageButton>
      <ul>
        {moreThanFirst && (
          <li>
            <StyledPageButton
              type="button"
              aria-label="Go to previous results."
              onClick={() => {
                handleClick(currentPage - 3);
              }}
            >
              <IoEllipsisHorizontalSharp />
            </StyledPageButton>
          </li>
        )}
        {Array.from({ length: pageEndNum - pageStartNum + 1 }, (_, index) => {
          return (
            <li key={index}>
              <StyledPageButton
                type="button"
                $current={currentPage === pageStartNum + index}
                aria-pressed={currentPage === pageStartNum + index}
                aria-label={`Go to page ${pageStartNum + index}`}
                onClick={() => {
                  handleClick(pageStartNum + index);
                }}
              >
                {pageStartNum + index}
              </StyledPageButton>
            </li>
          );
        })}
              {lessThanLast && (
      <StyledPageButton
        type="button"
        aria-label="Go to next results."
        onClick={() => {
          handleClick(currentPage + 3);
        }}
      >
        <IoEllipsisHorizontalSharp />
      </StyledPageButton>
              )}
      </ul>
      <StyledPageButton
        type="button"
        aria-label="Go to next page."
        onClick={() => {
          if (currentPage > Math.floor(totalResults / limit)) return;
          handleClick(currentPage + 1);
        }}
      >
        <IoIosArrowForward />
      </StyledPageButton>
    </StyledPaginationControl>
  );
};
