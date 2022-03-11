import { StyledLink, StyledIcon, StyledSpan } from './Logo.styled';

export const Logo = () => {
  return (
    <h1>
      <StyledLink to="/">
        <StyledIcon />
        <StyledSpan>TwoSpoon</StyledSpan>
      </StyledLink>
    </h1>
  );
};
