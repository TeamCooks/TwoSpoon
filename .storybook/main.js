const path = require('path');
const setRootPath = (_path) => path.resolve(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': setRootPath('src'),
      '@emotion/core': setRootPath('node_modules/@emotion/react'),
      '@emotion/styled': setRootPath('node_modules/@emotion/styled'),
    };

    return config;
  },
};
