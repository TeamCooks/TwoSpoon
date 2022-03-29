import styled from '@emotion/styled';
import { IconButton } from 'components';
import { StyledHeaderProps } from './Header.types';
import { HEADER_HEIGHT } from 'styles/GlobalStyle';
import { pxToRem } from 'utils';

export const StyledHeader = styled.header<StyledHeaderProps>`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 10px rgba(0 0 0 / 10%);
  padding: 0 10px 0 20px;
  position: fixed;
  top: 0;
  ${({ $hide }) => $hide && `top: ${-1 * HEADER_HEIGHT}px;`}
  left: 0;
  right: 0;
  transition: top 0.2s ease-in-out;
  z-index: 10;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  height: ${pxToRem(HEADER_HEIGHT)};
`;

export const StyledIconButton = styled(IconButton)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  box-shadow: 1px 4px 9px rgb(0 0 0 / 30%);
`;
