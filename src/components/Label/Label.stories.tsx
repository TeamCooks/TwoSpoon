import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Label',
  component: Label,
  args: {
    type: 'time',
    value: 0,
  },
} as ComponentMeta<typeof Label>;
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const DefaultTimeLabel = Template.bind({});

export const TimeLabel = Template.bind({});

TimeLabel.args = {
  value: 255,
};

export const DefaultBookMarkLabel = Template.bind({});

DefaultBookMarkLabel.args = {
  type: 'bookmark',
  value: 0,
};

export const BookMarkLabel = Template.bind({});

BookMarkLabel.args = {
  type: 'bookmark',
  value: 10,
};
