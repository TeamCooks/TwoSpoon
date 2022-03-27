import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HotRecipes } from './HotRecipes';

export default {
  title: 'HotRecipes',
  component: HotRecipes,
} as ComponentMeta<typeof HotRecipes>;

const Template: ComponentStory<typeof HotRecipes> = () => <HotRecipes />;

export const Default = Template.bind({});
