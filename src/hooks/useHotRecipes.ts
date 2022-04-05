import { getHotRecipes } from 'api/customApi';
import { useEffect, useState } from 'react';

export const useHotRecipes = () => {
  const [hotRecipes, setHotRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setHotRecipes(await getHotRecipes());
    })();
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return { hotRecipes, loading };
};
