import axios from 'axios';

export default defineEventHandler(async (e) => {
  const { recipeID } = useQuery(e.req);

  try {
    const { data: recipeDetails } = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`
    );

    return recipeDetails;
  } catch (error) {
    return {
      error: true,
      statusCode: '404',
      message: `Sorry. We couldn't fetch the details for this recipe from our server.`,
    };
  }
});
