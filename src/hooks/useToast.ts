import { useState, useEffect, useCallback } from 'react';

export const useToast = (duration = 1000) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) setTimeout(() => setShowToast(false), duration);
  }, [showToast]);

  const displayToast = useCallback(() => {
    setShowToast(true);
  }, [])
  return { showToast, displayToast };
};
