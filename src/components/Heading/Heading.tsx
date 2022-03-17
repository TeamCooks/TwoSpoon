import { HeadingProps } from './Heading.types';
import { StyledHeading } from './Heading.styled';

export const Heading = ({ as, className, children }: HeadingProps): JSX.Element => {
  return (
    <StyledHeading as={as} className={className}>
      {children}
    </StyledHeading>
  );
};
