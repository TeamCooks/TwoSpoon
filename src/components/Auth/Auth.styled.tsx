import styled from '@emotion/styled';
import { pxToRem } from 'utils';

export const StyledFieldError = styled.div`
  height: ${pxToRem(32)};
  line-height: 1.8;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.primaryOrange};
  padding: 0 ${pxToRem(20)};
`;

export const StyledInput = styled.input`
  padding: 0 ${pxToRem(24)};
  height: ${pxToRem(36)};
  border: none;
  border-radius: ${pxToRem(5)} ${pxToRem(5)};
  ${({ warning, theme }) => warning && `box-shadow: 0 0 1px 5px ${theme.color.primaryOrange};`}
`;
