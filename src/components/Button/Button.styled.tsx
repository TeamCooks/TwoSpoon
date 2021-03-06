import styled from '@emotion/styled';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px;
  border: none;
  background: none;
  border-radius: ${({ round }) => round && '30px'};
  &:disabled {
    background-color: ${({ theme }) => theme.color.gray300};
    cursor: not-allowed;
  }
`;

export const StyledOutlineButton = styled(StyledButton)`
  border: 1px solid currentColor;
  color: ${({ color, theme }) => theme.color[color]};
`;

export const StyledFillButton = styled(StyledButton)`
  background-color: ${({ color, theme }) => theme.color[color]};
  color: ${({ theme }) => theme.color.white};
`;
