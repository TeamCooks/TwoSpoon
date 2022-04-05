export interface RandomRecipe {
  id: number;
  title: string;
  summary: string;
  image: string;
}

export interface RandomRecipeQuery {
  recipes: RandomRecipe[];
}

export interface SearchRecipeItem {
  id: number;
  title: string;
  readyInMinutes: number;
  image: string;
  imageUrls: string[];
}

export interface SearchResults {
  results: SearchRecipeItem[];
  baseUri: string;
  offset: number;
  number: number;
  totalResults: number;
  processingTimeMs: number;
  expires: number;
  isStale: boolean;
}

export interface SearchQuery {
  keyword: string;
  number: number;
  offset: number;
}
