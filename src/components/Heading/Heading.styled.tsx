import styled from '@emotion/styled';
import { pxToRem, media } from 'utils';

export const StyledHeading = styled.h1`
  font-size: ${pxToRem(32)};
  color: ${({ theme }) => theme.color.primaryOrange};
  font-weight: bold;
  padding-top: ${pxToRem(16)};

  ${media.mobile} {
    font-size: ${pxToRem(26)};
  }
`;
