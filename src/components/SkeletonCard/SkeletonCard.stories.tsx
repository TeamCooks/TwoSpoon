import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkeletonCard } from './SkeletonCard';

export default {
  title: 'SkeletonCard',
  component: SkeletonCard,
  args: {
    type: 'square',
    background: 'white',
    hasSummary: true,
    headingPosition: 'topLeft',
  },
} as ComponentMeta<typeof SkeletonCard>;

const Template: ComponentStory<typeof SkeletonCard> = (args) => <SkeletonCard {...args} />;

export const Default = Template.bind({});

export const WideType = Template.bind({});

WideType.args = {
  type: 'wide',
};

export const NoBackground = Template.bind({});

NoBackground.args = {
  background: 'none',
};

export const NoSummary = Template.bind({});

NoSummary.args = {
  hasSummary: false,
};

export const BottomLeft = Template.bind({});

BottomLeft.args = {
  headingPosition: 'bottomLeft',
};

export const BottomCenter = Template.bind({});

BottomCenter.args = {
  headingPosition: 'bottomCenter',
};
