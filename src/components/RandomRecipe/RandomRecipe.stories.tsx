import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RandomRecipe } from './RandomRecipe';

export default {
  title: 'RandomRecipe',
  component: RandomRecipe,
} as ComponentMeta<typeof RandomRecipe>;

const Template: ComponentStory<typeof RandomRecipe> = () => <RandomRecipe />;

export const Default = Template.bind({});
