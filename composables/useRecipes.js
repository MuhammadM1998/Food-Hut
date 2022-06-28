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
    const recipes = await $fetch('/api/forkify/search', {
      params: { recipeName },
    });

    return recipes;
  };

  const getRecipeDetailsByID = async (recipeID) => {
    const { recipe: recipeDetails } = await $fetch('/api/forkify/recipe', {
      params: { recipeID },
    });

    return recipeDetails;
  };

  return { searchRecipesByName, getRecipeDetailsByID, navigateToSearch };
};

export default useRecipes;
