import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
  args: {
    id: 1,
    type: 'wide',
    background: 'white',
    hasSummary: false,
    headingPosition: 'bottomLeft',
    title: 'image',
    // imgSrc: 'https://spoonacular.com/recipeImages/Chopped-Kale-Salad-with-Pomegranate---Avocado-584495.jpg',
  },
  parameters: {
    nextRouter: {
      query: {
        id: 1,
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
