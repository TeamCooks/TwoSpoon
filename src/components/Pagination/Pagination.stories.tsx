import { ThemeProvider } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'theme/theme';
import { Pagination } from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    currentPage: 4,
    onClick: () => console.log('currentPage change'),
    totalResults: 100,
    limit: 5,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const DefaultPagination = Template.bind({});
