import styled from 'styled-components';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;
  border: none;
  background: none;
  border-radius: ${({ round }) => round && '30px'};
`;

export const StyledOutlineButton = styled(StyledButton)`
  border: 1px solid currentColor;
  color: ${({ color, theme }) => theme.color[color]};
`;

export const StyledFillButton = styled(StyledButton)`
  background-color: ${({ color, theme }) => theme.color[color]};
  color: ${({ theme }) => theme.color.white};
`
