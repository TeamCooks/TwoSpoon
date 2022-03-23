import styled from '@emotion/styled';
import LactoOvo from 'assets/icons/lactoOvo.svg';
import { StyledBadgeProps } from './Badge.types';

const sizes = {
  small: {
    fontSize: '14px',
  },
  large: {
    fontSize: '16px',
  },
};

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 30px;
  padding: 1em;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ $color, theme }) => theme.color[$color]};
  max-height: 2.5em;
  text-transform: uppercase;
  font-size: ${({ $size }) => sizes[$size].fontSize};
`;

export const StyledLactoOvo = styled(LactoOvo)`
  font-size: 20px;
`;
