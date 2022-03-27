import { useRandomRecipe } from 'hooks';
import { RandomRecipe as RandomRecipeType } from 'store/services/types/queries';
import { Heading, SkeletonCard, Card } from '..';
import {
  RandomDiceIcon,
  RandomRecipeButton,
  RandomRecipeCardWrapper,
  RandomRecipeSection,
} from './RandomRecipe.styled';

export const RandomRecipe = (): JSX.Element => {
  const { recipe, error, isLoading, handleClick } = useRandomRecipe();

  console.log(recipe);
  console.log(error);

  const renderCard = () => {
    if (isLoading) {
      return <SkeletonCard type="wide" background="white" hasSummary={true} headingPosition="bottomLeft" />;
    } else {
      const { id, title, summary, image } = recipe as RandomRecipeType;
      return (
        <Card
          id={id}
          type="wide"
          background="white"
          hasSummary={true}
          headingPosition="bottomLeft"
          imgSrc={image}
          title={title}
          summary={summary}
        />
      );
    }
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
