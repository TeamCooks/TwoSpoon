import type { NextPage } from 'next';
import Head from 'next/head';
import { HotRecipes, Meta, RandomRecipe } from 'components';
import { media } from 'utils';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  const metaData = {
    title: 'Home',
  };
  return (
    <>
      <Head>
        <Meta data={metaData} />
      </Head>
      <div
        css={css`
          ${media.desktop} {
            display: flex;
            flex-direction: row;
          }
        `}
      >
        <RandomRecipe />
        <HotRecipes />
      </div>
    </>
  );
};

export default Home;
