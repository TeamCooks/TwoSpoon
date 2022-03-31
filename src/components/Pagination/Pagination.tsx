import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { usePageNum } from 'hooks/usePageNum';
import { PaginationProps } from './Pagination.types';
import { StyledPageButton, StyledPaginationControl } from './Pagination.styled';

export const Pagination = ({ limit, currentPage, onClick: handleClick, totalResults }: PaginationProps) => {
  const { pageStartNum, pageEndNum } = usePageNum({ currentPage, totalResults, limit });
  return (
    <StyledPaginationControl>
      <StyledPageButton
        type="button"
        aria-label="Go to previous results page."
        onClick={() => {
          if (currentPage === 1) return;
          handleClick(currentPage - 1);
        }}
      >
        <IoIosArrowBack />
      </StyledPageButton>
      <ul>
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
      </ul>
      <StyledPageButton
        type="button"
        aria-label="Go to next results page."
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
