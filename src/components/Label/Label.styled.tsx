import styled from 'styled-components';
import { pxToRem } from 'utils';

export const StyledLabel = styled.p`
  color: #cbcbcb;
  font-size: ${pxToRem(24)};
  display: block;
  padding: ${pxToRem(10)} 0;
`;

export const StyledStrong = styled.strong`
  font-weight: bolder;
`;
