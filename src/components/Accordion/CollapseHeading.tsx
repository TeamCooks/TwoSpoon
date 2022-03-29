import { GoChevronDown } from 'react-icons/go';
import { CollapseHeadingProps } from './Accordion.types';
import { StyledCollapseHeading, StyledHeading } from './Accordion.styled';

export const CollapseHeading = ({ heading }: CollapseHeadingProps): JSX.Element => {
  return (
    <StyledCollapseHeading>
      <StyledHeading>{heading}</StyledHeading>
      <GoChevronDown />
    </StyledCollapseHeading>
  );
};
