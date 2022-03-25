import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from './Menu';

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => <Menu />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div style={{ width: '300px', display: 'flex', justifyContent: 'center' }}>
      <Story />
    </div>
  ),
];
