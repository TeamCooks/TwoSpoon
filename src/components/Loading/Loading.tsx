import { useEffect } from 'react';
import { $ } from 'utils';
import { StyledLoadingThreeDots } from './Loading.styled';
import { LoadingProps } from './Loading.types';

const loadingStartNode = $<HTMLDivElement>('loading-start');
const loadingEndNode = $<HTMLDivElement>('loading-end');

export const Loading = ({ message }: LoadingProps) => {
  useEffect(() => {
    loadingStartNode.setAttribute('role', 'alert');
    loadingStartNode.insertAdjacentHTML('beforeend', `<span class="a11yHidden">${message}</span>`);

    return () => {
      loadingStartNode.removeAttribute('role');
      loadingStartNode.innerHTML = '';

      loadingEndNode.insertAdjacentHTML('beforeend', `<span class="a11yHidden">Finished Loading.</span>`);
      setTimeout(() => {
        loadingEndNode.innerHTML = '';
      }, 800);
    };
  }, [message]);

  return <StyledLoadingThreeDots fill="#e56a18" height="1em" />;
};
