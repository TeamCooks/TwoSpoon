import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  args: {
    size: 'small',
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const dairyFree = Template.bind({});

dairyFree.args = {
  iconType: 'dairyFree',
};

export const lactoOvo = Template.bind({});

lactoOvo.args = {
  iconType: 'lactoOvo',
};

export const lactoOvoVegetarian = Template.bind({});

lactoOvoVegetarian.args = {
  iconType: 'lactoOvoVegetarian',
};

export const vegetarian = Template.bind({});

vegetarian.args = {
  iconType: 'vegetarian',
};

export const vegan = Template.bind({});

vegan.args = {
  iconType: 'vegan',
};

export const glutenFree = Template.bind({});

glutenFree.args = {
  iconType: 'glutenFree',
};

export const popular = Template.bind({});

popular.args = {
  iconType: 'popular',
};

export const paleolithic = Template.bind({});

paleolithic.args = {
  iconType: 'paleolithic',
};

export const paleo = Template.bind({});

paleo.args = {
  iconType: 'paleo',
};

export const primal = Template.bind({});

primal.args = {
  iconType: 'primal',
};

export const healthy = Template.bind({});

healthy.args = {
  iconType: 'healthy',
};

export const pescatarian = Template.bind({});

pescatarian.args = {
  iconType: 'pescatarian',
};
