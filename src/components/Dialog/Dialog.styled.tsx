import styled from '@emotion/styled';
import { IconButton } from 'components';

export const StyledDialogContainer = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  width: 90%;
  height: 90%;
  overflow: auto;
`;

export const StyledDialogContent = styled.div`
  z-index: 200;
  color: #121212;
  background: rgba(36, 36, 36, 0.8);
  backdrop-filter: blur(3px);
  min-height: 100%;
`;

export const StyledCloseButton = styled(IconButton)`
  cursor: pointer;
  position: absolute;
  z-index: 200;
  top: 20px;
  right: 20px;
  border: 0;
  padding: 10px;
  background: transparent;
  color: #fefefe;
  svg {
    pointer-events: none;
    fill: currentColor;
  }
`;

export const StyledDim = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(36, 36, 36, 0.8);
  backdrop-filter: blur(2px);
`;
