<script setup>
  // Loading Spinner
  const isLoading = ref(true);

  // Fetching Recipes
  const { searchRecipesByName } = useRecipes();
  const { recipeName } = useRoute().query;
  const isRecipesFound = ref(false);
  const recipes = reactive({});

  onBeforeMount(async () => {
    isLoading.value = true;
    const response = await searchRecipesByName(recipeName);

    if (response.error) {
      isRecipesFound.value = false;
      return;
    }

    console.log(response);
    isRecipesFound.value = true;
    Object.assign(recipes, response);
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
          Found <span class="text-yellow">{{ recipes.number }}</span> recipes
          for
          <span class="text-red">{{ recipeName }}</span>
        </h1>

        <SearchPagination :recipes="recipes" />
      </div>
    </div>
  </section>
</template>
