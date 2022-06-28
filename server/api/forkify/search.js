import axios from 'axios';

export default defineEventHandler(async (e) => {
  const { recipeName } = useQuery(e.req);

  try {
    const { data: recipesList } = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${recipeName}`
    );

    return recipesList;
  } catch (error) {
    return {
      error: true,
      statusCode: '404',
      message: `Sorry. We couldn't find the recipe you searched for in our database.`,
    };
  }
});
