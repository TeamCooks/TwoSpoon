import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    as: 'h1',
    children: 'Heading Text',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
