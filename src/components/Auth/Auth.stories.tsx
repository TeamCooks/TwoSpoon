import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Auth } from './Auth';

export default {
  title: 'Auth',
  component: Auth,
  args: { currentForm: 'signin' },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<typeof Auth> = (args) => <Auth {...args} />;

export const SignInForm = Template.bind({});
export const SignUpForm = Template.bind({});
SignUpForm.args = { currentForm: 'signup' };
