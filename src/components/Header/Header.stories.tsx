import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});

