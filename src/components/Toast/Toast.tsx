import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { StyledP } from './Toast.styled';
import { ToastProps } from './Toast.types';

export const Toast = ({ message }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(()=> {
    setTimeout(() => setIsVisible(false), 3000);
  }, [])

  return isVisible && createPortal(<StyledP>{message}</StyledP>, document.getElementById('toast')!);
};
