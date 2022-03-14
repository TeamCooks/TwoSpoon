import LoadingIcons from 'react-loading-icons';
import styled from 'styled-components';

export const StyledLoadingThreeDots = styled(LoadingIcons.ThreeDots)`
  z-index: 400;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;
