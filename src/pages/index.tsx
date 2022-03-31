import type { NextPage } from 'next';
import Head from 'next/head';
import { HotRecipes, RandomRecipe } from 'components';
import { media } from 'utils';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - HanSpoon</title>
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
