import type { NextPage } from 'next';
import { useGetRandomRecipeQuery } from 'store/services';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const {
    data: { recipes },
    error,
    isLoading,
  } = useGetRandomRecipeQuery(1);
  console.log(recipes);
  console.log(error);
  console.log(isLoading);

  return <div>Home</div>;
};

export default Home;
