import { useState } from 'react';
import { useRouter } from 'next/router';
import { actions } from 'store/slices/auth';
import { IconButton, Button, Toast } from 'components';
import Link from 'next/link';
import { logOut } from 'api/requestAuth';
import { useDispatch } from 'react-redux';
import { StyledNav, StyledUl, StyledLi } from './Menu.styled';

export const Menu = ({ onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleSignOut = () => {
    logOut();
    dispatch(actions.signOut());
    onSignOut();
  };
  const router = useRouter();

  /*
  TODO: 스토리북에서 next.js 설정 후 주석 해제
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  */

  return (
    <StyledNav onBlur={handleBlur}>
      <IconButton
        type="button"
        ariaLabel="User Menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
        color="black"
        size="large"
        variant="transparent"
        iconType="user"
        onClick={handleClick}
      />
      {isOpen && (
        <StyledUl>
          <StyledLi>
            <Link href="/my-recipes">My Recipes</Link>
          </StyledLi>
          <StyledLi>
            <Button type="button" variant="transparent" color="white" onClick={handleSignOut}>
              Sign Out
            </Button>
          </StyledLi>
        </StyledUl>
      )}
    </StyledNav>
  );
};
