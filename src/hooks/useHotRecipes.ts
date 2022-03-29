import { useEffect, useState } from 'react';

export const useHotRecipes = () => {
  const [hotRecipes, setHotRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // 이 부분 custom API 완료후 적용!
  //   useEffect(() => {
  //     (async () => {
  //       setHotRecipes(await getHotRecipes());
  //     })();
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1200);
  //   }, []);

  return { hotRecipes, loading };
};
