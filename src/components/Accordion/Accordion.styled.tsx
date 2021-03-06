import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { pxToRem, media } from 'utils';

const collapseContent = (props: { theme: Theme }) =>
  css`
    font-size: ${pxToRem(18)};
    color: ${props.theme.color.gray500};
    padding: 0.5rem 0;
    line-height: 1.3;
  `;

export const StyledCollapseHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
  align-content: center;

  svg {
    color: $white;
    width: 2em;
    height: 2em;
    transition: 0.3s;
    margin: auto 0;
  }
`;

export const StyledHeading = styled.h3`
  display: inline-block;
  font-size: 1.625rem;
`;

export const StyledIngredient = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-of-type {
    width: 50%;
  }
`;

export const StyledAccordionText = styled.p`
  margin-top: 0;
`;

export const StyledRecipeInfoItem = styled.li`
  margin-bottom: 60px !important;

  summary {
    list-style: none;
    cursor: pointer;
    padding: ${pxToRem(3)};
    user-select: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details[open] {
    svg {
      transform: rotate(-180deg);
    }
  }
`;

export const DivCollapseContent = styled.div`
  ${collapseContent}
`;

export const UlCollapseContent = styled.ul`
  ${collapseContent}

  li {
    padding: 8px 0;
  }
`;

export const OlCollapseContent = styled.ol`
  ${collapseContent}
  list-style: decimal-leading-zero;
  padding-left: 1.8em;

  li {
    padding: 8px 0;
  }
`;

export const StyledAccordion = styled.ul`
  ${media.desktop} {
    width: 45%;
    height: 70vh;
    overflow: auto;
    padding: 8px;
  }

  ${media.mobile} {
    margin-top: 20px;
  }

  display: block;
  color: ${({ theme }) => theme.color.gray500};
  margin: 0;
`;
