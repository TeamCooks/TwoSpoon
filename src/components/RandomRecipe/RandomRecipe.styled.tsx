import styled from '@emotion/styled';
import { Button } from '../';
import { media, pxToRem } from 'utils';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { StyledButtonProps } from 'components/Button/Button.types';

export const RandomRecipeSection = styled.section`
  flex-grow: 1;
  position: relative;
  font-family: inherit;

  ${media.desktop} {
    height: 80vh;
    max-width: 30%;
    min-width: ${pxToRem(512)};
    padding-top: ${pxToRem(20)};
    margin: 0 40px;
  }
`;

export const RandomRecipeButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin: ${pxToRem(16)};

  ${media.mobile} {
    margin: ${pxToRem(8)} 0 ${pxToRem(16)} ${pxToRem(16)};
    font-size: ${pxToRem(12)};
    padding: ${pxToRem(1)} ${pxToRem(6)};
  }

  ${media.desktop} {
    margin: ${pxToRem(36)} 0 ${pxToRem(36)} ${pxToRem(36)};
    padding: ${pxToRem(6)} ${pxToRem(18)};
  }
`;

export const RandomDiceIcon = styled(GiPerspectiveDiceSixFacesRandom)`
  font-size: 25px;
`;

export const RandomRecipeCardWrapper = styled.div`
  margin-top: ${pxToRem(16)};

  ${media.desktop} {
    height: 70vh;
  }
`;
