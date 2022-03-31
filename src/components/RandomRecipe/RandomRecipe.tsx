import { useRandomRecipe } from 'hooks';
import { Heading, SkeletonCard, Card } from '..';
import {
  RandomDiceIcon,
  RandomRecipeButton,
  RandomRecipeCardWrapper,
  RandomRecipeSection,
} from './RandomRecipe.styled';

export const RandomRecipe = (): JSX.Element => {
  const { recipe, isLoading, handleClick } = useRandomRecipe();

  const renderCard = () => {
    if (isLoading) {
      return <SkeletonCard type="wide" background="white" hasSummary headingPosition="bottomLeft" />;
    }
    const { id, title, summary, image } = recipe;

    return (
      <Card
        id={id}
        type="wide"
        background="white"
        hasSummary
        headingPosition="bottomLeft"
        imgSrc={image}
        title={title}
        summary={summary}
      />
    );
  };

  return (
    <RandomRecipeSection>
      <Heading as="h2">Random Recipe</Heading>
      <RandomRecipeButton round variant="outlined" color="primaryOrange" type="button" onClick={handleClick}>
        <RandomDiceIcon />
        REROLL
      </RandomRecipeButton>
      <RandomRecipeCardWrapper>{renderCard()}</RandomRecipeCardWrapper>
    </RandomRecipeSection>
  );
};
