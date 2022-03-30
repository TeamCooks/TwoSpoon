import { Loading, Card, Pagination } from 'components';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSearchRecipeQuery } from 'store/services';
import { ContextProp, SearchPageProps } from './search.types';

const RESULTS_PER_PAGE = 12;

const Search: NextPage<SearchPageProps> = ({ keyword, results, totalResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResults, setCurrentResults] = useState([]);
  const { data, error, isLoading } = useSearchRecipeQuery({
    keyword,
    number: RESULTS_PER_PAGE,
    offset: (currentPage - 1) * RESULTS_PER_PAGE,
  });

  useEffect(() => {
    if (currentPage !== 1 && data) setCurrentResults(data.results);
  }, [currentPage]);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Head>
        <title>{`Searched: ${keyword}`}</title>
      </Head>
      {currentPage !== 1 && isLoading ? (
        <Loading message={`Loading ${currentPage} page of search results for ${keyword}`} showBackground={false} />
      ) : (
        <ul>
          {(currentPage === 1 ? results : currentResults).map(({ id, title, image }) => (
            <li key={id}>
              <Card
                id={id}
                type="smallSquare"
                background="none"
                hasSummary={false}
                headingPosition="bottomCenter"
                imgSrc={`https://spoonacular.com/recipeImages/${image}`}
                title={title}
              />
            </li>
          ))}
        </ul>
      )}
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
