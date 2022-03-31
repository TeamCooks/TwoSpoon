import { Loading, Pagination, Meta, CardList } from 'components';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSearchRecipeQuery } from 'store/services';
import { SearchRecipeItem } from 'store/services/types/queries';
import { ContextProp, SearchPageProps } from './search.types';

const RESULTS_PER_PAGE = 12;

const Search: NextPage<SearchPageProps> = ({ keyword, results, totalResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResults, setCurrentResults] = useState<SearchRecipeItem[]>([]);
  const { data, isFetching } = useSearchRecipeQuery({
    keyword,
    number: RESULTS_PER_PAGE,
    offset: (currentPage - 1) * RESULTS_PER_PAGE,
  });

  useEffect(() => {
    if (currentPage !== 1 && data) setCurrentResults(data.results);
  }, [data]);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Head>
        <title>${`Searched: ${keyword} - TwoSpoon`}</title>
        <Meta
          data={{
            title: `Searched: ${keyword}`,
          }}
        />
      </Head>
      {currentPage !== 1 && isFetching && (
        <Loading message={`Loading ${currentPage} page of search results for ${keyword}`} showBackground />
      )}c
      <CardList results={currentPage === 1 ? results : currentResults} />
      <Pagination
        currentPage={currentPage}
        limit={RESULTS_PER_PAGE}
        totalResults={totalResults}
        onClick={handleClick}
      />
    </div>
  );
};

export async function getServerSideProps({ query }: ContextProp) {
  const { keyword } = query;
  const { results, totalResults } = await fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${keyword}&number=${RESULTS_PER_PAGE}&offset=${0}`,
    {
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    } as RequestInit,
  ).then((res) => res.json());
  return {
    props: { keyword, results, totalResults },
  };
}

export default Search;
