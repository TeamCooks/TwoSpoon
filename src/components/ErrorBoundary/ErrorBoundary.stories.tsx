import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorBoundary } from './ErrorBoundary';

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary,
  args: {
    children: <h1>NoError</h1>,
  },
} as ComponentMeta<typeof ErrorBoundary>;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => <ErrorBoundary {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
