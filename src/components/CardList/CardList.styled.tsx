import styled from '@emotion/styled';
import { pxToRem, media } from 'utils';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const StyledItem = styled.li`
  text-align: center;
  width: ${pxToRem(240)};

  @media (max-width: 1056px) {
    width: 50%;
  }

  ${media.mobile} {
    width: 100%;
  }
`;
