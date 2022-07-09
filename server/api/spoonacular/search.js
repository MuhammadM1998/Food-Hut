import axios from 'axios';

export default defineEventHandler(async (e) => {
  const apiKey = useRuntimeConfig().apiKey;
  const searchEndpoint = 'https://api.spoonacular.com/recipes/complexSearch';
  const { recipeName } = useQuery(e.req);

  try {
    if (!recipeName) {
      const newError = new Error();
      newError.response = {
        data: {
          code: 404,
          message:
            "There's no meal with no name! Enter a name and search again.",
        },
      };
      throw newError;
    }

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

    if (recipesList.totalResults === 0) {
      const newError = new Error();
      newError.response = {
        data: {
          code: 404,
          message:
            "Sorry. We couldn't find the recipe you searched for in our database.",
        },
      };
      throw newError;
    }

    return recipesList;
  } catch (err) {
    return {
      error: true,
      statusCode: err.response.data.code,
      message:
        err.response.data.code === 402
          ? "The site's daily limit of 150 search requests has been exceeded. Please try again tomorrow."
          : err.response.data.message,
    };
  }
});
