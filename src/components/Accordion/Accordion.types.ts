type RecipeDetailType = 'ingredients' | 'equipment' | 'summary' | 'instructions';

interface Ingredient {
  unit: string;
  name: string;
  amount: number;
}

interface IngredientDetail {
  type: 'ingredients';
  data: Ingredient[];
}

interface EquipmentDetail {
  type: 'equipment';
  data: string[];
}

interface SummaryDetail {
  type: 'summary';
  data: string;
}
interface InstructionDetail {
  type: 'instructions';
  data: string[];
}

export interface CollapseHeadingProps {
  heading: RecipeDetailType;
}

export type CollapseContentProps = IngredientDetail | EquipmentDetail | SummaryDetail | InstructionDetail;

export type RecipeDetail = [IngredientDetail, EquipmentDetail, SummaryDetail, InstructionDetail];

export interface AccordionProps {
  recipeDetails: RecipeDetail;
}
