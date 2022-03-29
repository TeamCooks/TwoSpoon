import styled from '@emotion/styled';
import { pxToRem } from 'utils';
import { EmptyPageProps } from './EmptyPage.types';

export const StyledContainer = styled.div<EmptyPageProps>`
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10vh;
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.color.primaryOrange};
    font-size: ${pxToRem(40)};
  }
`;
