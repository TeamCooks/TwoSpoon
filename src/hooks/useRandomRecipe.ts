import { Card, SkeletonCard } from 'components';
import { useCallback, useEffect, useState } from 'react';
import { useGetRandomRecipeQuery } from 'store/services';
import _ from 'lodash';

export const useRandomRecipe = () => {
  const [savedRecipe, setSavedRecipe] = useState([]);
  const [recipe, setRecipe] = useState({});

  const {
    data: { recipes },
    error,
    isLoading,
  } = useGetRandomRecipeQuery(2);

  setRecipe(recipes[0]);
  setSavedRecipe(recipes[1]);

  const getRecipe = useCallback(() => {
    setRecipe(savedRecipe);
    const { data: recipes } = useGetRandomRecipeQuery(1);
    setSavedRecipe(recipes[0]);
  }, []);

  const handleClick = _.throttle(() => {
    getRecipe();
  }, 300);

  return [recipe, isLoading, handleClick];
};
