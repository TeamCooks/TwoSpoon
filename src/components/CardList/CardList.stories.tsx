import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardList } from './CardList';

export default {
  title: 'CardList',
  component: CardList,
  args: {
    results: [
      {
        id: 592479,
        image: 'Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg',
        title: 'Kale and Quinoa Salad with Black Beans',
      },
      {
        id: 547775,
        image: 'Creamy-Avocado-Pasta-547775.jpg',
        title: 'Creamy Avocado Pasta',
      },
      {
        id: 818941,
        image: 'avocado-toast-with-eggs-spinach-and-tomatoes-818941.jpg',
        title: 'Avocado Toast with Eggs, Spinach, and Tomatoes',
      },
      {
        id: 495111,
        image: 'Citrus-Sesame-Kale-495111.jpg',
        title: 'Citrus Sesame Kale',
      },
    ],
  },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const Default = Template.bind({});
