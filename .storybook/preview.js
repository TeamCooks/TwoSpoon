import ko from 'axe-core/locales/ko.json';
import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { GlobalStyle } from 'styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import * as NextImage from 'next/image';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
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

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      // blurDataURL="/images/no-image.jpg"
    />
  ),
});
