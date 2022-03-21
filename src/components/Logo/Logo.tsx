import Link from 'next/link';
import { StyledA, StyledIcon, StyledSpan } from './Logo.styled';

export const Logo = () => {
  return (
    <h1>
      <Link href="/">
        <StyledA>
          <StyledIcon />
          <StyledSpan>TwoSpoon</StyledSpan>
        </StyledA>
      </Link>
    </h1>
  );
};
