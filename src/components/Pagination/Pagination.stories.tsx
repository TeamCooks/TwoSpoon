import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    currentPage: 4,
    onClick: () => console.log('currentPage change'),
    totalResults: 100,
    limit: 5,
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const DefaultPagination = Template.bind({});
