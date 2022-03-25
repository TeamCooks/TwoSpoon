import { SearchForm, Menu, Button, Logo } from 'components';
import { useState, useEffect, useRef } from 'react';
// import { useAuthLoading, useAuthUser } from '../../contexts/AuthContext';
import lodash from 'lodash';
import { createPortal } from 'react-dom';
import { StyledHeader, StyledDiv, StyledIconButton } from './Header.styled';

export const Header = (): JSX.Element => {
  // const authLoading = useAuthLoading();
  // const authUser = useAuthUser();
  // const [showDialog, setShowDialog] = useState(false);

  const [tempAuth, setTempAuth] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const oldScrollTop = useRef(0);

  /*
  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  */

  const handleFocus = () => {
    setHideHeader(false);
  };

  const handleBlur = () => {
    setHideHeader(window.pageYOffset > 70);
  };

  const controlHeader = lodash.throttle(() => {
    const currentScrollTop = window.pageYOffset;
    setHideHeader(currentScrollTop > 70 && currentScrollTop > oldScrollTop.current);
    oldScrollTop.current = currentScrollTop;
  }, 300);

  const controlScrollToTop = lodash.debounce(() => {
    const currentScrollTop = window.pageYOffset;
    setShowScrollToTop(currentScrollTop > 500);
  }, 300);

  useEffect(() => {
    document.addEventListener('scroll', controlHeader);
    document.addEventListener('scroll', controlScrollToTop);
    return () => {
      document.removeEventListener('scroll', controlHeader);
      document.removeEventListener('scroll', controlScrollToTop);
    };
  }, []);

  return (
    <StyledHeader onFocus={handleFocus} onBlur={handleBlur}>
      <StyledDiv>
        <Logo />
        <SearchForm />
        {tempAuth ? (
          <Menu />
        ) : (
          <>
            <Button
              type="button"
              variant="transparent"
              aria-haspopup="dialog"
              aria-label="Open SignIn Dialog"
              title="Open SignIn Dialog"
              // onClick={handleOpenDialog}
              color="black"
            >
              Sign In
            </Button>
            {/* <Auth isVisible={showDialog} onClose={handleClos /eDialog} /> */}
          </>
        )}
        {showScrollToTop &&
          createPortal(
            <StyledIconButton
              ariaLabel="Go to Top"
              iconType="up"
              type="button"
              variant="filled"
              color="primaryGreen"
              size="large"
              circle
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }}
            />,
            document.getElementById('__next')!,
          )}
      </StyledDiv>
    </StyledHeader>
  );
};
