<script setup>
  // Loading Spinner
  const isLoading = ref(true);

  // Fetching Recipes
  const { searchRecipesByName } = useRecipes();
  const route = useRoute();
  const isRecipesFound = ref(false);
  const errorMessage = ref('');
  const recipes = reactive({});
  const recipeName = computed(() => route.query.recipeName);

  watch(
    recipeName,
    async (value) => {
      isLoading.value = true;
      const response = await searchRecipesByName(value);

      if (response.error) {
        isRecipesFound.value = false;
        Object.assign(recipes, {});
        errorMessage.value = response.message;
      } else {
        isRecipesFound.value = true;
        Object.assign(recipes, response);
        errorMessage.value = '';
      }

      isLoading.value = false;
      return;
    },
    {
      immediate: true,
    }
  );

  // Meta Data
  useHead({
    title: `Search for ${route.query.recipeName} `,
    meta: [{ name: 'description', content: 'Food Hut Search Page' }],
  });
</script>

<template>
  <section class="pt-2 pb-16">
    <Spinner v-if="isLoading" :is-activated="isLoading" />

    <div v-else>
      <div
        v-if="!isRecipesFound"
        class="container min-h-[65vh] grid place-content-center gap-6"
      >
        <NuxtIcon name="no-results" class="mx-auto text-9xl text-red" />

        <p class="text-2xl font-bold text-center text-gray-200 dark:text-white">
          {{ errorMessage }}
        </p>
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
