import styled, { css } from 'styled-components';
import { StyledIconButtonProps } from './Button.types';

const sizes = {
  small: {
    width: '24px',
    height: '24px',
    fontSize: '16px',
  },
  large: {
    width: '50px',
    height: '50px',
    fontSize: '32px',
  },
};

export const StyledButton = styled.button<StyledIconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background: none;
  border-radius: ${({ circle }) => circle && '50%'};
  color: ${({ color, theme }) => theme.color[color]};

  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

export const StyledOutlineButton = styled(StyledButton)`
  border: 1px solid currentColor;
`;

export const StyledFillButton = styled(StyledButton)`
  background-color: ${({ color, theme }) => theme.color[color]};
  color: ${({ theme }) => theme.color.white};
`;
