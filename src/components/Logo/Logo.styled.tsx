import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import { pxToRem, media } from 'utils';

export const StyledLink = styled(Link)`
  display: flex;
  font-size: ${pxToRem(24)};
  align-items: center;
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
