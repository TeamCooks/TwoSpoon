import { Header } from '..';
import { LayoutProps } from './Layout.types';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div id="loading-start" aria-live="assertive" />
      <div id="loading-end" aria-live="assertive" />
    </>
  );
};
