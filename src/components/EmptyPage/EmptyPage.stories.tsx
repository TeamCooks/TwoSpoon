import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmptyPage from './EmptyPage';

export default {
  title: 'EmptyPage',
  component: EmptyPage,
  args: {
    headline: 'Nothing Saved',
    description: 'Save your recipe!',
  },
} as ComponentMeta<typeof EmptyPage>;


const Template: ComponentStory<typeof EmptyPage> = (args) => <EmptyPage {...args} />;

export const DefaultEmptyPage = Template.bind({});

export const ErrorPage = Template.bind({});

ErrorPage.args = {
  headline: 'Oops',
  description: 'Something went wrong',
  children: <div>Go Back to main page?</div>
}