import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthContainer } from './Auth';

export default {
  title: 'AuthContainer',
  component: AuthContainer,
} as ComponentMeta<typeof AuthContainer>;

const Template: ComponentStory<typeof AuthContainer> = (args) => <AuthContainer {...args} />;

export const SignInForm = Template.bind({});
