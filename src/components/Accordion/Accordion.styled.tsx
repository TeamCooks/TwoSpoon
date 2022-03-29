import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const collapseContent = (props: { theme: Theme }) =>
  css`
    font-size: rem(18px);
    color: ${props.theme.color.gray200};
    padding: 0.5rem 0;
    line-height: 1.3;
  `;

export const StyledCollapseHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.white};
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

  span:first-child {
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
    padding: rem(3px);
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

export const UlCollapseContent = styled.div`
  ${collapseContent}

  li {
    padding: 8px 0;
  }
`;
export const OlCollapseContent = styled.div`
  ${collapseContent}
  list-style: decimal-leading-zero;
  padding-left: 1.8em;

  li {
    padding: 8px 0;
  }
`;
