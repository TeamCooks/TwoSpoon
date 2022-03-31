import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BadgeList } from './BadgeList';

export default {
  title: 'BadgeList',
  component: BadgeList,
  args: {
    tags: [
      'glutenFree',
      'healthy',
    ],
  },
} as ComponentMeta<typeof BadgeList>;

const Template: ComponentStory<typeof BadgeList> = (args) => <BadgeList {...args} />;

export const Default = Template.bind({});
