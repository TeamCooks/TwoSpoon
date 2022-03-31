import type { NextPage } from 'next';
import { useGetRandomRecipeQuery } from 'store/services';
import Head from 'next/head';
import Image from 'next/image';
import { HotRecipes, RandomRecipe } from 'components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - HanSpoon</title>
      </Head>
      <RandomRecipe />
      <HotRecipes />
    </>
  );
};

export default Home;
