import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Layout } from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => (
  <Layout>
    <h2>Test</h2>
  </Layout>
);

export const Default = Template.bind({});
