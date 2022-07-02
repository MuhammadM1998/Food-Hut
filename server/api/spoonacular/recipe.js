import axios from 'axios';

export default defineEventHandler(async (e) => {
  const { recipeID } = useQuery(e.req);
  const apiKey = useRuntimeConfig().apiKey;
  const searchEndpoint = `https://api.spoonacular.com/recipes/${recipeID}/information`;

  try {
    const { data: recipeDetails } = await axios.get(searchEndpoint, {
      params: {
        includeNutrition: false,
        apiKey,
      },
    });

    return recipeDetails;
  } catch (error) {
    return {
      error: true,
      statusCode: '404',
      message: `Sorry. We couldn't find the recipe you searched for in our database.`,
    };
  }
});
