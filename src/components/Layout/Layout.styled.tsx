import styled from '@emotion/styled';
import { headerHeight } from 'components/Header/Header.styled';
import { media, pxToRem } from 'utils';

export const StyledMain = styled.main`
  margin-top: ${headerHeight}px;
  ${media.mobile} {
    padding: ${pxToRem(10)};
    min-width: 320px;
  }
  ${media.desktop} {
    max-width: 1500px;
    margin: ${headerHeight}px auto 0;
  }
`;
