import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast } from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  args: {
    message: 'message',
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});

export const LongMessage = Template.bind({});

LongMessage.args = {
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const Copied = Template.bind({});

Copied.args = {
  message: 'Copied',
};
