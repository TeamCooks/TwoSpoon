import ko from 'axe-core/locales/ko.json';
// import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { GlobalStyle } from 'styles/GlobalStyle';

// export const decorators = [
//   (Story) => (
//     <MemoryRouter>
//       <GlobalStyle />
//       <Story />
//     </MemoryRouter>
//   ),
// ];

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
