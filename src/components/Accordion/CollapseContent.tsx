import { CollapseContentProps } from './Accordion.types';
import { StyledIngredient, StyledAccordionText } from './Accordion.styled';

export const CollapseContent = ({ type, data }: CollapseContentProps): JSX.Element => {
  switch (type) {
    case 'ingredients':
      return (
        <>
          {data.map((ingredient, index) => (
            <StyledIngredient key={ingredient.name + index}>
              <span>{ingredient.name}</span>
              <span>{`${ingredient.amount.toFixed(2)} ${ingredient.unit}`}</span>
            </StyledIngredient>
          ))}
        </>
      );
    case 'equipment':
      return (
        <>
          {data.map((equipment, index) => (
            <li key={equipment + index}>{equipment}</li>
          ))}
        </>
      );
    case 'summary':
      return (
        <>
          {data.split('. ').map((text, index, texts) => (
            <StyledAccordionText key={text + index}>{text + (index < texts.length - 1 ? '.' : '')}</StyledAccordionText>
          ))}
        </>
      );
    case 'instructions':
      return (
        <>
          {data.map((instruction, index) => (
            <li key={instruction + index}>
              <StyledAccordionText>{instruction}</StyledAccordionText>
            </li>
          ))}
        </>
      );
  }
};
