import { Header } from '..';
import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
