import { StyledContainer } from './EmptyPage.styled';
import { EmptyPageProps } from './EmptyPage.types';

export default function EmptyPage({ children }: EmptyPageProps): JSX.Element {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}
