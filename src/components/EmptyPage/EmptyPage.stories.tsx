import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from 'next/link';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'styles/GlobalStyle';
import { EmptyPage } from './EmptyPage';

export default {
  title: 'EmptyPage',
  component: EmptyPage,
  args: {
    children: (
      <>
        <h2>Headline</h2>
        <p>Description</p>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof EmptyPage>;

const Template: ComponentStory<typeof EmptyPage> = (args) => <EmptyPage {...args} />;

export const DefaultEmptyPage = Template.bind({});

export const ErrorPage = Template.bind({});

ErrorPage.args = {
  children: (
    <>
      <h2>Oops, something went wrong</h2>
      <Link href="/">Go Back to main page?</Link>
    </>
  ),
};
