import styled from '@emotion/styled';
import { Heading } from '..';
import { media, pxToRem } from 'utils';

export const HotRecipesSection = styled.section`
  ${media.desktop} {
    flex-grow: 2;
    padding-top: ${pxToRem}(20);
    height: 80vh;
  }
`;

export const HotRecipesHeader = styled(Heading)`
  ${media.mobile} {
    margin-top: ${pxToRem(40)};
  }

  ${media.desktop} {
    padding-left: ${pxToRem(16)};
  }

  @media (min-width: 1546px) {
    padding-left: ${pxToRem(28)};
  }
`;

export const HotRecipesCardList = styled.ul`
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    margin: 0;
  }
  ${media.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 99%;
    overflow: auto;
  }
`;

export const HotRecipesCardItem = styled.li`
  text-align: center;
  width: ${pxToRem(290)};

  @media (max-width: 1547px) {
    width: 50%;
    text-align: center;
  }

  @media (max-width: 1100px) {
    width: 100%;
    text-align: center;
  }
`;
