import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RandomRecipeQuery, SearchQuery, SearchResults } from './types/queries';

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
    searchRecipe: builder.query<SearchResults, SearchQuery>({
      query: ({ keyword, number, offset }) => `recipes/search?query=${keyword}&number=${number}&offset=${offset}`,
    }),
  }),
});

export const { useGetRandomRecipeQuery, useSearchRecipeQuery } = twoSpoonApi;
