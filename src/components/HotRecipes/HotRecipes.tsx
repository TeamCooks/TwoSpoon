import { useHotRecipes } from 'hooks';
import { SkeletonCard, Card } from '..';
import { HotRecipesCardItem, HotRecipesCardList, HotRecipesHeader, HotRecipesSection } from './HotRecipes.styled';

export const HotRecipes = () => {
  const { hotRecipes, loading } = useHotRecipes();

  // TODO: customAPi 완료후 여기에 타입 달아주기
  const renderCards = ({ recipeId, image, title }) => {
    if (loading) {
      return <SkeletonCard type="square" background="none" hasSummary={false} headingPosition="bottomCenter" />;
    }

    return (
      <Card
        id={recipeId}
        type="square"
        background="none"
        hasSummary={false}
        headingPosition="bottomCenter"
        imgSrc={image}
        title={title}
      />
    );
  };

  return (
    <HotRecipesSection>
      <HotRecipesHeader as="h2">Hot Recipes</HotRecipesHeader>
      <HotRecipesCardList>
        {hotRecipes.map((recipe) => {
          return <HotRecipesCardItem key={recipe.title}>{renderCards(recipe)}</HotRecipesCardItem>;
        })}
      </HotRecipesCardList>
    </HotRecipesSection>
  );
};
