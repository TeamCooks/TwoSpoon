import { Header } from '..';
import { StyledMain } from './Layout.styled';
import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
};
