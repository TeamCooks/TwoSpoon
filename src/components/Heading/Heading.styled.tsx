import styled from 'styled-components';
import { pxToRem } from 'utils';

export const StyledHeading = styled(({ as }) => as)`
  font-size: ${pxToRem(32)};
  color: ${({ theme }) => theme.color.primaryOrange};
  font-weight: bold;
  padding-top: ${pxToRem(16)};

  @media ${({ theme }) => theme.break.mobile} {
    font-size: ${pxToRem(26)};
  }
`;
