import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Auth } from './Auth';

export default {
  title: 'Auth',
  component: Auth,
  args: { currentForm: 'signin' },
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<typeof Auth> = (args) => <Auth {...args} />;

export const SignInForm = Template.bind({});
export const SignUpForm = Template.bind({});
SignUpForm.args = { currentForm: 'signup' };
