import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loading } from './Loading';

export default {
  title: 'Loading',
  component: Loading,
  args: {
    message: 'Loading..',
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
