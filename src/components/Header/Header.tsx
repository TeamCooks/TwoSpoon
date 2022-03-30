import { AuthContainer, Button, Logo, Menu, SearchForm, Toast } from 'components';
import { useToast } from 'hooks';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { AuthState } from 'store/slices/auth';
import { HEADER_HEIGHT } from 'styles/GlobalStyle';
import { StyledDiv, StyledHeader, StyledIconButton } from './Header.styled';

export const Header = (): JSX.Element => {
  const [showDialog, setShowDialog] = useState(false);
  const { showToast: showSignInToast, displayToast: displaySignInToast } = useToast(2000);
  const { showToast: showSignOutToast, displayToast: displaySignOutToast } = useToast(2000);
  const [hideHeader, setHideHeader] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const oldScrollTop = useRef(0);
  const { authUser, isLoading } = useSelector<RootState, AuthState>((state) => state.auth);

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
    setHideHeader(window.pageYOffset > HEADER_HEIGHT);
  };

  const controlHeader = _.throttle(() => {
    const currentScrollTop = window.pageYOffset;
    setHideHeader(currentScrollTop > HEADER_HEIGHT && currentScrollTop > oldScrollTop.current);
    oldScrollTop.current = currentScrollTop;
  }, 300);

  const controlScrollToTop = _.debounce(() => {
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
    <StyledHeader onFocus={handleFocus} onBlur={handleBlur} $hide={hideHeader || isLoading}>
      <StyledDiv>
        <Logo />
        <SearchForm />
        {authUser ? (
          <Menu onSignOut={displaySignOutToast} />
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
            {showDialog && <AuthContainer onClose={handleCloseDialog} onSignIn={displaySignInToast} />}
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
        {showSignInToast && <Toast message="Signed in successfully!" />}
        {showSignOutToast && <Toast message="Signed out" />}
      </StyledDiv>
    </StyledHeader>
  );
};
