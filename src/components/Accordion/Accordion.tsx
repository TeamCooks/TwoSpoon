import { AccordionProps } from './Accordion.types';
import { Collapse } from './Collapse';
import { StyledAccordion } from './Accordion.styled';

export const Accordion = ({ recipeDetails }: AccordionProps) => {
  return (
    <StyledAccordion>
      {recipeDetails.map(({ type, data }) => {
        switch (type) {
          case 'ingredients':
            return <Collapse key={type} type={type} data={data} />;
          case 'equipment':
            return <Collapse key={type} type={type} data={data} />;
          case 'summary':
            return <Collapse key={type} type={type} data={data} />;
          case 'instructions':
            return <Collapse key={type} type={type} data={data} />;
        }
      })}
    </StyledAccordion>
  );
};
