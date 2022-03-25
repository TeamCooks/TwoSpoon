import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchForm } from './SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = () => <SearchForm />;

export const Default = Template.bind({});
