import styled from '@emotion/styled';
import { pxToRem } from 'utils';
import { StyledInputProps } from './Auth.types';

export const StyledAuthContainer = styled.div`
  h1 {
    text-align: center;
  }
`;

export const StyledForm = styled.form`
  margin: ${pxToRem(18)} auto;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(4)};
  > * {
    display: block;
    padding: 0 ${pxToRem(24)};
    height: ${pxToRem(36)};
    border: none;
    border-radius: ${pxToRem(5)} ${pxToRem(5)};
  }
`;

export const StyledAuthError = styled.div`
  border: 2px solid red;
  background-color: rgba(255, 0, 0, 0.4);
  border-radius: ${pxToRem(5)};
  padding: ${pxToRem(16)} 0;
  margin: ${pxToRem(18)} auto;
  max-width: ${pxToRem(400)};
  min-width: ${pxToRem(280)};
  text-align: center;
  color: white;
`;

export const StyledFieldError = styled.div`
  height: ${pxToRem(32)};
  line-height: 1.8;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.primaryOrange};
  padding: 0 ${pxToRem(20)};
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: 0 ${pxToRem(24)};
  height: ${pxToRem(36)};
  border: none;
  border-radius: ${pxToRem(5)} ${pxToRem(5)};
  ${({ $warning, theme }) => $warning && `box-shadow: 0 0 1px 5px ${theme.color.primaryOrange};`}
  background-color: ${({ theme }) => theme.color.searchGray};
`;
