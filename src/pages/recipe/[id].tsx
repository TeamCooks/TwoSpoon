import { getSavedRecipe } from 'api/customApi';
import { excludeTags, camelCase } from 'utils/misc';
import { Detail } from 'components';

// TODO: 타입 정의

const Recipe = ({ recipeData }) => {
  const { title, image, creditsText, tags, readyInMinutes, savedCount, savedBy, recipeId, recipeDetails } = recipeData;
  return (
    <Detail
      title={title}
      image={image}
      creditsText={creditsText}
      tags={tags}
      readyInMinutes={readyInMinutes}
      savedCount={savedCount}
      savedBy={savedBy}
      recipeId={recipeId}
      recipeDetails={recipeDetails}
    />
  );
};

export default Recipe;

export async function getServerSideProps(context) {
  const { id } = context.query;

  let recipeData = await getSavedRecipe(id);

  if (!recipeData) {
    recipeData = await getRecipeById(id);
    recipeData.recipeDetails = [
      {
        type: 'ingredients',
        data: recipeData.extendedIngredients.map((ingredient) => ({
          name: ingredient.nameClean,
          amount: ingredient.amount,
          unit: ingredient.measures.metric.unitShort,
        })),
      },
      {
        type: 'equipment',
        data: [
          ...new Set(
            recipeData.analyzedInstructions[0]?.steps?.flatMap((step) =>
              step.equipment?.flatMap((equip) => equip.name),
            ),
          ),
        ],
      },
      { type: 'summary', data: excludeTags(recipeData.summary) },
      {
        type: 'instructions',
        data: recipeData.analyzedInstructions[0]?.steps?.map((step) => step.step),
      },
    ];
    recipeData.savedCount = 0;
    recipeData.tags = [...recipeData.diets.filter((diet) => diet !== 'fodmap friendly')];

    if (recipeData.veryPopular) recipeData.tags = [...recipeData.tags, 'popular'];
    if (recipeData.veryHealthy) recipeData.tags = [...recipeData.tags, 'healthy'];
  }

  recipeData.tags = recipeData.tags.map((str: string) => camelCase(str));
  recipeData.recipeId = id;

  return {
    props: { recipeData },
  };
}

const getRecipeById = async (id) => {
  try {
    const data = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
      params: { includeNutrition: 'true' },
    }).then((res) => res.json());

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
