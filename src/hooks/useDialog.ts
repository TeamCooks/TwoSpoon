import { useState, useEffect, useCallback } from 'react';

export const useDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return { showDialog, handleOpenDialog, handleCloseDialog };
};
