import styled from '@emotion/styled';
import { pxToRem } from 'utils';

export const StyledPaginationControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(20)};
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${pxToRem(10)};
  }
`;

export const StyledPageButton = styled.button`
  color: ${({ theme, current }) => (current ? theme.color.white : theme.color.primaryOrange)};
  border: 1px solid ${({ theme }) => theme.color.primaryOrange};
  border-radius: ${pxToRem(5)};
  background-color: ${({ theme, current }) => (current ? theme.color.primaryOrange : theme.color.white)};
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  margin: ${pxToRem(6)};
  &:hover {
    opacity: 0.5;
  }
`;
