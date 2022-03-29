import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    recipeDetails: [
      {
        type: 'ingredients',
        data: [
          { unit: 'g', name: 'angel hair pasta', amount: 8 },
          { amount: 0.5, name: 'black pepper', unit: 'tsps' },
          { amount: 0.5, unit: 'Tbsps', name: 'chili powder' },
          { unit: 'tsps', name: 'corn starch', amount: 2 },
          { name: 'spring onions', unit: '', amount: 3 },
          { amount: 2, unit: '', name: 'juice' },
          { amount: 3, name: 'fat free greek yogurt', unit: 'Tbsps' },
          { amount: 0.5, unit: 'Tbsps', name: 'paprika' },
          { unit: 'g', amount: 1, name: 'shrimp' },
          { amount: 0.5, unit: 'tsps', name: 'salt' },
          { name: 'sesame oil', amount: 2.5, unit: 'Tbsps' },
          { amount: 1.5, unit: 'tsps', name: 'sriracha' },
          { unit: '', amount: 3, name: 'sweet chili sauce' },
        ],
      },
      {
        type: 'equipment',
        data: ['pot', 'whisk', 'bowl', 'frying pan'],
      },
      {
        type: 'summary',
        data: 'Need a pescatarian main course? Bang Bang Shrimp Pasta could be a tremendous recipe to try. One serving contains 422 calories, 32g of protein, and 11g of fat. For $2.86 per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. 10686 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately 20 minutes. A mixture of juice, paprika, corn starch, and a handful of other ingredients are all it takes to make this recipe so yummy. To use up the black pepper you could follow this main course with the Dr. Pepper Cake with Flour Cooked Frosting as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 87%. This score is tremendous. Try Bang Bang Shrimp Pasta, Bang Bang Shrimp Pasta, and Bang Bang Shrimp Pasta for similar recipes.',
      },
      {
        type: 'instructions',
        data: [
          'In a large stockpot over medium-high heat, bring 10-12 cups of water to boil.',
          'Add pasta and cook until al dente (softened but still slightly firm).',
          'Drain pasta and set aside. In a large Ziploc bag add corn starch, paprika, chili powder, salt and black pepper.',
          'Add shrimp to bag, seal and shake bag a few times to evenly cover shrimp with seasoning mixture. In a small bowl, whisk together Greek yogurt, sweet chili sauce, 1 Tbsp sesame oil, lime juice, sriracha sauce and red pepper flakes.',
          'Pour sauce over pasta and toss to evenly coat pasta. Set aside. In a large skillet over medium-high heat, add remaining 1 Tbsp sesame oil. Once oil has heated, saut shrimp for 3-5 minutes. Flip halfway through to evenly cook on both sides.',
          'Serve shrimp over pasta and top with green onions.',
        ],
      },
    ],
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
