import { createPortal } from 'react-dom';
import { StyledP } from './Toast.styled';
import { ToastProps } from './Toast.types';

export const Toast = ({ message }: ToastProps) => {
  return createPortal(<StyledP>{message}</StyledP>, document.getElementById('toast')!);
};
