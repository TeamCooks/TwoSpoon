export interface RandomRecipe {
  id: number;
  title: string;
  summary: string;
  image: string;
}

export interface RandomRecipeQuery {
  recipes: RandomRecipe[];
}
