import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'styles/GlobalStyle';
import { StoreProvider } from 'store';
import { Layout, ErrorBoundaryWithRouter } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        <ErrorBoundaryWithRouter>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundaryWithRouter>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default MyApp;
