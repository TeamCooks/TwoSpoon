import styled from '@emotion/styled';
import { pxToRem } from 'utils';

export const StyledContainer = styled.div`
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items; center;
  text-align: center;
  gap: 10vh;
  h2 {
    text-align: center;
    color: #e56a18;
    font-size: ${pxToRem(40)};
  }
`;
