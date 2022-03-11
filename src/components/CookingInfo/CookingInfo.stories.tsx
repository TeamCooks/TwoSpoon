import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CookingInfo } from './CookingInfo';

export default {
  title: 'CookingInfo',
  component: CookingInfo,
} as ComponentMeta<typeof CookingInfo>;

const Template: ComponentStory<typeof CookingInfo> = (args) => <CookingInfo {...args} />;

export const Default = Template.bind({});

export const HasTime = Template.bind({});

HasTime.args = {
  time: 10,
};

export const HasCount = Template.bind({});

HasCount.args = {
  count: 10,
};

export const HasBoth = Template.bind({});

HasBoth.args = {
  time: 20,
  count: 5,
};
