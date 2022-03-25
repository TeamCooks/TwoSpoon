import ko from 'axe-core/locales/ko.json';
import React from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  a11y: {
    config: { locale: ko },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
