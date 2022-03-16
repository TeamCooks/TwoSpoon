import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
