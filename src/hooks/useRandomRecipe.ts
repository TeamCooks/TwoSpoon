import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { RandomRecipe } from 'store/services/types/queries';
import { getRandomRecipe } from 'api/requestData';

export const useRandomRecipe = () => {
  const [savedRecipe, setSavedRecipe] = useState<RandomRecipe>({} as RandomRecipe);
  const [recipe, setRecipe] = useState<RandomRecipe>({} as RandomRecipe);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { recipes } = await getRandomRecipe(2);

      setRecipe(recipes[0]);
      setSavedRecipe(recipes[1]);

      setIsLoading(false);
    })();
  }, []);

  const getRecipe = async () => {
    setRecipe(savedRecipe);
    const { recipes } = await getRandomRecipe();
    setSavedRecipe(recipes[0]);
  };

  const handleClick = _.throttle(getRecipe, 300);

  return { recipe, isLoading, handleClick };
};
