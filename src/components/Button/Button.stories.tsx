import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Outline = Template.bind({});

Outline.args = {
  variant: 'outlined',
  color: 'primaryGreen',
  children: (
    <>
      <GiPerspectiveDiceSixFacesRandom style={{ fontSize: '25px' }} />
      REROLL
    </>
  ),
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  round: true,
};

export const Fill = Template.bind({});

Fill.args = {
  type: 'submit',
  variant: 'filled',
  color: 'primaryGreen',
  children: 'Sign In',
  round: true,
};

export const Transparent = Template.bind({});

Transparent.args = {
  variant: 'transparent',
  children: 'Not registered yet? Sign up here!',
};
