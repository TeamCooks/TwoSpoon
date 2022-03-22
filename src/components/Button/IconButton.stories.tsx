import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

export const Search = Template.bind({});

Search.args = {
  type: 'submit',
  ariaLabel: 'search',
  iconType: 'search',
  variant: 'transparent',
  color: 'black',
  size: 'small',
};

export const Link = Template.bind({});
Link.decorators = [
  (Story) => (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <Story />
    </div>
  ),
];

Link.args = {
  type: 'button',
  ariaLabel: 'copy link',
  iconType: 'link',
  variant: 'transparent',
  color: 'white',
  size: 'large',
};

export const Fill = Template.bind({});

Fill.args = {
  type: 'button',
  ariaLabel: 'cart',
  iconType: 'cart',
  variant: 'filled',
  color: 'primaryGreen',
  size: 'large',
  circle: true,
};

export const Outline = Template.bind({});
Outline.decorators = [
  (Story) => (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <Story />
    </div>
  ),
];

Outline.args = {
  type: 'button',
  ariaLabel: 'heart',
  iconType: 'heart',
  variant: 'outlined',
  color: 'white',
  size: 'large',
  circle: true,
};
