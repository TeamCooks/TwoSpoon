import styled from '@emotion/styled';
import { pxToRem } from 'utils';
import { StyleInputProps } from './Auth.types';

export const StyledAuthContainer = styled.div`
  padding: 15vh 0 0 0;
  > * {
    max-width: ${pxToRem(400)};
    display: block;
    width: 40vw;
    min-width: ${pxToRem(300)};
    margin: 0 auto;
  }
`;

export const StyledForm = styled.form`
  margin: ${pxToRem(18)} auto;
  min-width: ${pxToRem(280)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(4)};
  input,
  button {
    padding: 0 ${pxToRem(24)};
    height: ${pxToRem(36)};
    border: none;
    border-radius: ${pxToRem(5)} ${pxToRem(5)};
  }
`;

export const StyledFieldError = styled.div`
  height: ${pxToRem(32)};
  line-height: 1.8;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.primaryOrange};
  padding: 0 ${pxToRem(20)};
`;

export const StyledInput = styled.input<StyleInputProps>`
  padding: 0 ${pxToRem(24)};
  height: ${pxToRem(36)};
  border: none;
  border-radius: ${pxToRem(5)} ${pxToRem(5)};
  ${({ $warning, theme }) => $warning && `box-shadow: 0 0 1px 5px ${theme.color.primaryOrange};`}
`;
