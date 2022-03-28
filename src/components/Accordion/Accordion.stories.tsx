import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CollapseHeading } from './CollapseHeading';

export default {
  title: 'CollapseHeading',
  component: CollapseHeading,
} as ComponentMeta<typeof CollapseHeading>;

const Template: ComponentStory<typeof CollapseHeading> = (args) => <CollapseHeading {...args} />;

export const Default = Template.bind({});
