import axios from 'axios';

export default defineEventHandler(async (e) => {
  const apiKey = useRuntimeConfig().apiKey;
  const searchEndpoint = 'https://api.spoonacular.com/recipes/complexSearch';
  const { recipeName } = useQuery(e.req);

  try {
    const { data: recipesList } = await axios.get(searchEndpoint, {
      params: {
        query: recipeName,
        number: 100,
        fillIngredients: true,
        addRecipeInformation: true,
        instructionsRequired: false,
        apiKey,
      },
    });

    return recipesList;
  } catch (error) {
    return {
      error: true,
      statusCode: '404',
      message: `Sorry. We couldn't find the recipe you searched for in our database.`,
    };
  }
});
