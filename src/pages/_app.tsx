import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
