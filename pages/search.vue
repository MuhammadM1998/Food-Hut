<script setup>
  // Loading Spinner
  const isLoading = ref(true);

  // Fetching Recipes
  const { searchRecipesByName } = useRecipes();
  const { recipeName } = useRoute().query;
  const isRecipesFound = ref(false);
  const recipesList = reactive({});

  onBeforeMount(async () => {
    isLoading.value = true;
    const response = await searchRecipesByName(recipeName);

    if (response.error) {
      isRecipesFound.value = false;
      return;
    }

    isRecipesFound.value = true;
    Object.assign(recipesList, response);
    isLoading.value = false;
  });

  // Meta Data
  useHead({
    title: `Search for ${recipeName} `,
    meta: [{ name: 'description', content: 'Food Hut Search Page' }],
  });
</script>

<template>
  <section class="pt-2 pb-16">
    <Spinner v-if="isLoading" :is-activated="isLoading" />

    <div v-else>
      <div v-if="!isRecipesFound" class="grid place-content-center">
        <h1 class="text-2xl font-bold text-gray-200 dark:text-white">
          Sorry. We couldn't find the recipe you searched for in our database.
        </h1>
      </div>

      <div v-else class="container">
        <h1 class="text-2xl font-bold text-gray-200 dark:text-white">
          Found <span class="text-yellow">{{ recipesList.count }}</span> recipes
          for
          <span class="text-red">{{ recipeName }}</span>
        </h1>

        <div class="recipes-wrapper">
          <SearchResult
            v-for="recipe in recipesList.recipes"
            :key="recipe.recipe_id"
            :recipe="recipe"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .recipes-wrapper {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 md:gap-y-12;
  }
</style>
