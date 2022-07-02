const useRecipes = () => {
  const navigateToSearch = (recipeName) => {
    return navigateTo({
      path: '/search',
      query: {
        recipeName,
      },
    });
  };

  const searchRecipesByName = async (recipeName) => {
    const recipes = await $fetch('/api/spoonacular/search', {
      params: { recipeName },
    });

    return recipes;
  };

  const getRecipeDetailsByID = async (recipeID) => {
    const recipeDetails = await $fetch('/api/spoonacular/recipe', {
      params: { recipeID },
    });

    return recipeDetails;
  };

  return { searchRecipesByName, getRecipeDetailsByID, navigateToSearch };
};

export default useRecipes;
