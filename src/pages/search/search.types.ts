export interface ContextProp {
  query: { keyword: string };
}

interface SearchResult {
  id: number;
  image: string;
  openLicense: number;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  title: string;
}

export interface SearchPageProps {
  keyword: string;
  results: SearchResult[];
  totalResults: number;
}
