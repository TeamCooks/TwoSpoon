import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { lighten } from 'polished';

export const StyledNav = styled.nav`
  position: relative;
  width: fit-content;
`;

export const StyledUl = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: ${({ theme }) => theme.color.menuBg};
  color: white;
  padding: 5px 0;
  white-space: nowrap;
  z-index: 10;

  & ::before {
    content: '';
    position: absolute;
    right: 20px;
    top: -9px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 10px 5px;
    border-color: transparent transparent ${({ theme }) => theme.color.menuBg} transparent;
  }
`;

export const StyledLi = styled.li`
  text-align: center;

  & > button,
  & > a {
    width: 100%;
    display: block;
    padding: 15px 25px;
  }

  & :hover {
    ${({ theme }) => {
      const menuBg = theme.color.menuBg;
      return css`
        background-color: ${lighten(0.2, menuBg)};
      `;
    }}
  }
`;
