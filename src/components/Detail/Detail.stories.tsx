import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Detail } from './Detail';

export default {
  title: 'Detail',
  component: Detail,
} as ComponentMeta<typeof Detail>;

const Template: ComponentStory<typeof Detail> = (args) => <Detail {...args} />;

export const Default = Template.bind({});
