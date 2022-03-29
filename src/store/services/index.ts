import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RandomRecipeQuery } from './types/queries';

export const twoSpoonApi = createApi({
  reducerPath: 'twoSpoonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('content-type', 'application/json');
      headers.set('x-rapidapi-host', `${process.env.NEXT_PUBLIC_RAPID_API_HOST}`);
      headers.set('x-rapidapi-key', `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getRandomRecipe: builder.query<RandomRecipeQuery, number>({
      query: (number = 1) => `recipes/random?number=${number}`,
    }),
  }),
});

export const { useGetRandomRecipeQuery } = twoSpoonApi;
