import styled from '@emotion/styled';
import { HEADER_HEIGHT } from 'styles/GlobalStyle';
import { pxToRem, media } from 'utils';

export const StyledMain = styled.main`
  margin: ${pxToRem(HEADER_HEIGHT)} auto 0;

  ${media.mobile} {
    padding: ${pxToRem(10)};
    min-width: 320px;
  }

  ${media.desktop} {
    max-width: 1500px;
  }
`;
