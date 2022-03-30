import { useCallback, useEffect, useState } from 'react';
import { useGetRandomRecipeQuery } from 'store/services';
import _ from 'lodash';
import { RandomRecipe } from 'store/services/types/queries';

export const useRandomRecipe = () => {
  const { data, error, isLoading } = useGetRandomRecipeQuery(2);

  const [savedRecipe, setSavedRecipe] = useState<RandomRecipe | {}>({});
  const [recipe, setRecipe] = useState<RandomRecipe | {}>({});

  useEffect(() => {
    if (data) {
      const { recipes } = data;
      setRecipe(recipes[0]);
      setSavedRecipe(recipes[1]);
    }
  }, []);

  const getRecipe = useCallback(() => {
    setRecipe(savedRecipe);
    const { data } = useGetRandomRecipeQuery(1);
    if (data) {
      const { recipes } = data;
      setSavedRecipe(recipes[0]);
    }
  }, []);

  const handleClick = () => {
    _.throttle(() => {
      getRecipe();
    }, 300);
  };

  return { recipe, error, isLoading, handleClick };
};
