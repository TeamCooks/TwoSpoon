import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreProvider } from 'store';
import { AuthContainer } from './Auth';

export default {
  title: 'AuthContainer',
  component: AuthContainer,
} as ComponentMeta<typeof AuthContainer>;

const Template: ComponentStory<typeof AuthContainer> = () => <AuthContainer />;

export const SignInForm = Template.bind({});
