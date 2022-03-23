import { createSlice } from '@reduxjs/toolkit';
import { RandomRecipe, RandomRecipeQuery } from 'store/services/types/queries';

interface RecipeState {
  //   savedRecipes: RandomRecipeQuery[];
  recipes: RandomRecipe;
  //   curIndex: number;
}

// const initialState: RecipeState = { recipes: {} as RandomRecipe, curIndex: 0 };

// export const recipeSlice = createSlice({
//   name: 'recipe',
//   initialState,
//   reducers: {
//     nextRandomRecipe(state, payload) {
//         state.curIndex++;
//         state.recipes =
//     },
//   },
// });
