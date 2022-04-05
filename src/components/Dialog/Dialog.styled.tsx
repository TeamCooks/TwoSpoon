import styled from '@emotion/styled';
import { IconButton } from 'components';
import { media, pxToRem } from 'utils';

export const StyledDialogContainer = styled.div`
  z-index: 200;
  position: fixed;
  top: 50vh;
  left: 50%;
  ${media.desktop} {
    width: ${pxToRem(400)};
  }
  ${media.mobile} {
    width: ${pxToRem(300)};
  }
  min-height: 50vh;
  max-height: 80vh;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: rgb(255, 255, 255);
  `;

export const StyledDialogContent = styled.div`
  z-index: 200;
  padding: 20px;
  margin: 20px;
`;

export const StyledCloseButton = styled(IconButton)`
  cursor: pointer;
  position: fixed;
  z-index: 200;
  top: 5px;
  right: 5px;
  border: 0;
  padding: 5px;
  background: transparent;
  color: ${({theme}) => theme.color.gray400};
  svg {
    pointer-events: none;
    fill: currentColor;
  }
`;

export const StyledDim = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(36, 36, 36, 0.8);
  backdrop-filter: blur(2px);
`;
