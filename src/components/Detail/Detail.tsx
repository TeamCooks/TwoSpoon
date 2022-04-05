import {
  StyledArticle,
  StyledHeader,
  StyledUl,
  StyledIconButton,
  StyledDiv,
  StyledFigure,
  StyledImg,
} from './Detail.styled';
import { DetailProps } from './Detail.types';
import { useEffect, useState } from 'react';
import { Heading, BadgeList, CookingInfo, Toast, AuthContainer } from 'components';
import { useToast, useDialog } from 'hooks';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { AuthState } from 'store/slices/auth';
import { removeRecipe, saveRecipe } from 'api/customApi';
import { Accordion } from 'components';

export const Detail = (recipeData: DetailProps) => {
  const { title, image, creditsText, tags, readyInMinutes, savedCount, savedBy, recipeId, recipeDetails } = recipeData;

  const { showDialog, handleOpenDialog, handleCloseDialog } = useDialog();
  const { showToast: showSignInToast, displayToast: displaySignInToast } = useToast(2000);
  const { showToast, displayToast } = useToast(700);
  const { authUser } = useSelector<RootState, AuthState>((state) => state.auth);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [countBeDisplayed, setCountBeDisplayed] = useState(0);

  useEffect(() => {
    setCountBeDisplayed(savedCount);

    if (authUser && savedBy) {
      setIsSaved(savedBy.includes(authUser));
      setIsBookmarked(savedBy.includes(authUser));
    } else {
      setIsSaved(false);
      setIsBookmarked(false);
    }
  }, [authUser]);

  useEffect(() => {
    const id = setTimeout(() => {
      if (authUser && isBookmarked !== isSaved) {
        setIsSaved(isBookmarked);
        if (isBookmarked) {
          saveRecipe(authUser, recipeData);
        } else {
          removeRecipe(authUser, recipeId);
        }
      }
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [isBookmarked]);

  const copyPageUrl = async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      displayToast();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleClick = () => {
    if (!authUser) {
      handleOpenDialog();
      return;
    }
    setIsBookmarked(!isBookmarked);
    isBookmarked ? setCountBeDisplayed(countBeDisplayed - 1) : setCountBeDisplayed(countBeDisplayed + 1);
  };

  return (
    <StyledArticle>
      <StyledHeader>
        <Heading as="h2">{title}</Heading>
        <Heading as="h3" className="a11yHidden">
          button list
        </Heading>
        <StyledUl>
          <li>
            <StyledIconButton
              variant="transparent"
              type="button"
              iconType="link"
              ariaLabel="copy link"
              color="black"
              size="large"
              circle
              onClick={copyPageUrl}
            />
            {showToast && <Toast message="Copied" />}
          </li>
          <li>
            <StyledIconButton
              variant="transparent"
              type="button"
              iconType={isBookmarked ? 'bookmarkFill' : 'bookmark'}
              ariaLabel="save to my recipes"
              color={isBookmarked ? 'primaryOrange' : 'black'}
              size="large"
              circle
              onClick={handleClick}
            />
          </li>
        </StyledUl>
      </StyledHeader>
      <StyledDiv>
        <StyledFigure>
          <StyledImg
            src={image && !/^(https)/.test(image) ? 'https://spoonacular.com/recipeImages/' + image : image}
            alt={title}
          />
          <figcaption>{creditsText}</figcaption>
        </StyledFigure>
        {tags && tags.length ? <BadgeList tags={tags} /> : null}
        <CookingInfo time={readyInMinutes || 0} count={countBeDisplayed || 0} />
      </StyledDiv>
      <Accordion recipeDetails={recipeDetails} />
      {showDialog && <AuthContainer onClose={handleCloseDialog} onSignIn={displaySignInToast} />}
      {showSignInToast && <Toast message="Signed in successfully!" />}
    </StyledArticle>
  );
};
