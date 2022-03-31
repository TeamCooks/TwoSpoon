import { Card } from 'components/Card/Card';
import { CardListProps } from './CardList.types';
import { StyledItem, StyledList } from './CardList.styled';

export function CardList({ results }: CardListProps) {
  return (
    <StyledList>
      {results.map(({ id, title, image }) => {
        if (image && !/^(https)/.test(image)) {
          image = 'https://spoonacular.com/recipeImages/' + image;
        }
        return (
          <StyledItem key={id}>
            <Card
              id={id}
              type="smallSquare"
              background="none"
              hasSummary={false}
              headingPosition="bottomCenter"
              imgSrc={image}
              title={title}
            />
          </StyledItem>
        );
      })}
    </StyledList>
  );
}
