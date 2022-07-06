import { defineStore } from 'pinia';

export const useRecipesStore = defineStore({
  id: 'recipes-store',

  state: () => {
    return { recipesList: [] };
  },

  actions: {
    bookmark(recipe) {
      const recipeIndex = this.findRecipeIndex(recipe);

      if (recipeIndex === -1) {
        // Adding a recipe
        this.addRecipe(recipe);
        localStorage.setItem('recipes-list', JSON.stringify(this.recipesList));
      } else {
        // Removing a recipe
        this.removeRecipe(recipeIndex);
      }
    },

    fetchRecipes() {
      if (localStorage.getItem('recipes-list'))
        this.recipesList = JSON.parse(localStorage.getItem('recipes-list'));
    },

    addRecipe(recipe) {
      const newRecipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.sourceName || 'Spoonacular',
        image: recipe.image,
      };
      this.recipesList.unshift(newRecipe);
    },

    removeRecipe(recipeIndex) {
      this.recipesList.splice(recipeIndex, 1);
    },

    findRecipeIndex(recipe) {
      return this.recipesList.findIndex((item) => item.id === recipe.id);
    },
  },

  getters: {
    getRecipes(state) {
      return state.recipesList;
    },
  },
});
