import { SearchForm, Menu, Button, Logo, AuthContainer, Dialog } from 'components';
import { useState, useEffect, useRef } from 'react';
import lodash from 'lodash';
import { createPortal } from 'react-dom';
import { StyledHeader, StyledDiv, StyledIconButton, headerHeight } from './Header.styled';
import { useSelector } from 'react-redux';

export const Header = (): JSX.Element => {
  const [showDialog, setShowDialog] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const oldScrollTop = useRef(0);
  const { authUser, isLoading } = useSelector((state) => state.auth);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleFocus = () => {
    setHideHeader(false);
  };

  const handleBlur = () => {
    setHideHeader(window.pageYOffset > headerHeight);
  };

  const controlHeader = lodash.throttle(() => {
    const currentScrollTop = window.pageYOffset;
    setHideHeader(currentScrollTop > headerHeight && currentScrollTop > oldScrollTop.current);
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
    <StyledHeader onFocus={handleFocus} onBlur={handleBlur} $hide={hideHeader && isLoading}>
      <StyledDiv>
        <Logo />
        <SearchForm />
        {authUser ? (
          <Menu />
        ) : (
          <>
            <Button
              type="button"
              variant="transparent"
              aria-haspopup="dialog"
              aria-label="Open SignIn Dialog"
              title="Open SignIn Dialog"
              onClick={handleOpenDialog}
              color="black"
            >
              Sign In
            </Button>
            {showDialog && (
              <Dialog label="login" onClose={handleCloseDialog}>
                <AuthContainer />
              </Dialog>
            )}
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
