import styled from '@emotion/styled';
import { pxToRem, media } from 'utils';
import LogoIcon from 'assets/icons/logo.svg';

export const StyledA = styled.a`
  display: flex;
  font-size: ${pxToRem(24)};
  align-items: center;
  cursor: pointer;
`;

export const StyledIcon = styled(LogoIcon)`
  margin: 10px;
`;

export const StyledSpan = styled.span`
  width: 130px;
  transition: 400ms width ease;

  ${media.mobile} {
    width: 0;
    overflow: hidden;
  }
`;
