import { useCallback, useEffect, useState } from 'react';
import { useGetRandomRecipeQuery } from 'store/services';
import _ from 'lodash';
import { RandomRecipe } from 'store/services/types/queries';

export const useRandomRecipe = () => {
  const [savedRecipe, setSavedRecipe] = useState<RandomRecipe | {}>({});
  const [recipe, setRecipe] = useState<RandomRecipe | {}>({});

  const { data, isLoading } = useGetRandomRecipeQuery(2);

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

  return { recipe, isLoading, handleClick };
};
