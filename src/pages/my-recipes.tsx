import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { AuthState } from 'store/slices/auth';
import { getMyRecipes } from 'api/customApi';
import { Loading, CardList, Meta, EmptyPage, Heading, Pagination } from 'components';
import { SearchRecipeItem } from 'store/services/types/queries';
import { useRouter } from 'next/router';
const RESULTS_PER_PAGE = 12;

const MyRecipes: NextPage = () => {
  const { authUser, isLoading: authLoading } = useSelector<RootState, AuthState>((state) => state.auth);
  const [recipesToBeDisplayed, setRecipesToBeDisplayed] = useState<SearchRecipeItem[]>([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  
  useEffect(() => {
    if (!authLoading && !authUser ) router.push('/');
  }, [authLoading, authUser]);
  
  useEffect(() => {
    if (!authUser) return;
    (async () => {
      const data = await getMyRecipes(authUser);
      setMyRecipes(data);
      setRecipesToBeDisplayed(data.slice(0, RESULTS_PER_PAGE));
      setIsLoading(false);
    })();
  }, [authUser]);
  
  useEffect(() => {
    setRecipesToBeDisplayed(myRecipes.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE));
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (isLoading) return <Loading message="Loading my recipes" showBackground={false} />;
  return (
    <>
      <Head>
        <title>My Recipes - TwoSpoon</title>
        <Meta
          data={{
            title: 'My Recipes - TwoSpoon',
          }}
        />
      </Head>
      {myRecipes.length === 0 ? (
        <EmptyPage>
          <Heading as="h2">Nothing saved</Heading>
          <p>Save recipes!</p>
        </EmptyPage>
      ) : (
        <>
          {/* <Heading as="h2" style={{ textAlign: 'center' }}>
            My Recipes
          </Heading> */}
          <CardList results={recipesToBeDisplayed} />
          <Pagination
            limit={RESULTS_PER_PAGE}
            onClick={setCurrentPage}
            currentPage={currentPage}
            totalResults={myRecipes.length}
          />
        </>
      )}
    </>
  );
};

export default MyRecipes;
