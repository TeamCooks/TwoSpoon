export interface PaginationProps {
  currentPage: number;
  onClick: (currentPage: number) => void;
  totalResults: number;
  limit: number;
}
