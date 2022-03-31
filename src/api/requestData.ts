import axios from 'axios';

const apiUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/';

export const getRandomRecipe = async (number = 1) => {
  try {
    const { data } = await axios.get(`${apiUrl}/recipes/random`, {
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': `${process.env.NEXT_PUBLIC_RAPID_API_HOST}`,
        'x-rapidapi-key': `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
      },
      params: { number },
    });
    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.message);
    } else {
      throw new Error('different error than axios');
    }
  }
};
