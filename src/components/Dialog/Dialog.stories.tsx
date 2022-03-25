import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dialog } from './Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
  args: {
    onClose: () => console.log('closed'),
    children: <h2>hahaha</h2>,
    nodeId: 'dialog',
    label: 'test',
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const DefaultDialog = Template.bind({});

export const TestDialog = Template.bind({});

TestDialog.args = { ...DefaultDialog.args, children: <h2>TESTTEST</h2> };
