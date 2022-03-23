import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from '../components';
import { StoreProvider } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default MyApp;
