import styled from '@emotion/styled';

export const StyledCollapseHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $white;
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
