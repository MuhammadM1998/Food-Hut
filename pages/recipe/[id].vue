<script setup>
  // Loading Spinner
  const isLoading = ref(true);

  // Fetching Recipe Data
  const { getRecipeDetailsByID } = useRecipes();
  const recipeID = useRoute().params.id;
  const isRecipeDataFound = ref(false);
  const recipe = reactive({});

  onBeforeMount(async () => {
    isLoading.value = true;
    const response = await getRecipeDetailsByID(recipeID);

    if (response.error) {
      isRecipeDataFound.value = false;
      return;
    }
    isRecipeDataFound.value = true;

    Object.assign(recipe, response);
    isLoading.value = false;
  });

  useHead({
    title: 'Recipe Details',
    meta: [
      {
        name: 'description',
        content: `Food Hut Recipe Details Page.`,
      },
    ],
  });
</script>

<template>
  <section class="pt-2 pb-16">
    <Spinner v-if="isLoading" :is-activated="isLoading" />

    <div v-else class="container flex flex-col gap-4">
      <div v-if="!isRecipeDataFound" class="grid place-content-center">
        <h1 class="text-2xl font-bold text-gray-200 dark:text-white">
          Sorry. We couldn't fetch the recipe data.
        </h1>
      </div>

      <div v-else class="flex flex-col gap-4">
        <h1 class="recipe-name">{{ recipe.title }}</h1>
        <RecipeImage :image-url="recipe.image_url" :image-alt="recipe.title" />
        <RecipeControls />
        <RecipeIngredients :ingredients="recipe.ingredients" />
        <RecipePublisher
          :publisher-name="recipe.publisher"
          :publisher-url="recipe.publisher_url"
          :directions-url="recipe.source_url"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .recipe-name {
    @apply text-2xl font-bold text-center text-red;
  }
</style>