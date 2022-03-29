import { CollapseContentProps } from './Accordion.types';
import { CollapseContent } from './CollapseContent';
import { CollapseHeading } from './CollapseHeading';
import { StyledRecipeInfoItem, UlCollapseContent, OlCollapseContent, DivCollapseContent } from './Accordion.styled';

export const Collapse = ({ type, data }: CollapseContentProps) => {
  let collapseContentContainer = null;

  switch (type) {
    case 'ingredients':
      collapseContentContainer = (
        <UlCollapseContent>
          <CollapseContent type={type} data={data} />
        </UlCollapseContent>
      );
      break;
    case 'equipment':
      collapseContentContainer =
        !data || !data.length ? (
          <p>No Equipment.</p>
        ) : (
          <UlCollapseContent>
            <CollapseContent type={type} data={data} />
          </UlCollapseContent>
        );
      break;
    case 'summary':
      collapseContentContainer = (
        <DivCollapseContent>
          <CollapseContent type={type} data={data} />
        </DivCollapseContent>
      );
      break;
    case 'instructions':
      collapseContentContainer =
        !data || !data.length ? (
          <p>No Instructions.</p>
        ) : (
          <OlCollapseContent>
            <CollapseContent type={type} data={data} />
          </OlCollapseContent>
        );
      break;
    default:
      break;
  }

  return (
    <StyledRecipeInfoItem>
      <details>
        <summary>
          <CollapseHeading heading={type} />
        </summary>
        {collapseContentContainer}
      </details>
    </StyledRecipeInfoItem>
  );
};
