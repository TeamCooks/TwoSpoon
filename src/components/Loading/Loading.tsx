import { useEffect } from 'react';
import { $ } from 'utils';
import { StyledLoadingThreeDots } from './Loading.styled';
import { LoadingProps } from './Loading.types';

const loadingStartNode = $('#loading-start');
const loadingEndNode = $<HTMLDivElement>('#loading-end');

export const Loading = ({ message, showBackground }: LoadingProps) => {
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

  return (
    <>
      {showBackground ? (
        <div
          style={{
            zIndex: '300',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(36, 36, 36, 0.8)',
            backdropFilter: 'blur(3px)',
            minHeight: '100%',
          }}
        />
      ) : null}
      <StyledLoadingThreeDots fill="#e56a18" height="1em" />
    </>
  );
};
