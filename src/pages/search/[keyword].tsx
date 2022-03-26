import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useSearchRecipeQuery } from 'store/services';
import { useState } from 'react';
import { ContextProp, SearchPageProps } from './search.types';
const RESULTS_PER_PAGE = 12;

const Search: NextPage = ({ results, totalResults }: SearchPageProps) => {

  // const {
  //   query: { keyword },
  // } = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const { data, error, isLoading } = useSearchRecipeQuery({
  //   keyword,
  //   number: RESULTS_PER_PAGE,
  //   offset: (currentIndex - 1) * RESULTS_PER_PAGE,
  // });
  // console.log(data);
  return (
    <div>
      <h1>{totalResults}</h1>
      <ul>
        {results.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps({ query }: ContextProp) {
  const { keyword } = query;
  const { results, totalResults } = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com//recipes/search?query=${keyword}&number=${RESULTS_PER_PAGE}&offset=${0}`,
    {
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    } as RequestInit,
  ).then((res) => res.json());
  return {
    props: { results, totalResults },
  };
}

export default Search;
