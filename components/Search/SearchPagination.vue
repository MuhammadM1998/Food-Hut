<script setup>
  const props = defineProps({
    recipes: { type: Object, required: true },
  });

  const recipesCount = props.recipes.number;
  const recipesList = ref(props.recipes.results);

  // Pagination
  const resultsPerPage = ref(10);
  const numberOfPages = Math.round(recipesCount / resultsPerPage.value);
  const currentPage = ref(1);
  const nextPage = computed(() => currentPage.value + 1);
  const previousPage = computed(() => currentPage.value - 1);
  const startIndex = computed(
    () => (currentPage.value - 1) * resultsPerPage.value
  );
  const endIndex = computed(() => currentPage.value * resultsPerPage.value);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="recipes-wrapper">
      <SearchResult
        v-for="recipe in recipesList.slice(startIndex, endIndex)"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>

    <div class="text-white pagination-controls">
      <div class="pagination-buttons">
        <button
          v-if="previousPage"
          @click="currentPage--"
          class="pagination-button"
          aria-label="Previous Page"
        >
          <NuxtIcon name="arrow-Left" />
        </button>

        <p class="text-yellow">Page {{ currentPage }} of {{ numberOfPages }}</p>

        <button
          v-if="nextPage <= numberOfPages"
          @click="currentPage++"
          class="pagination-button"
          aria-label="Next Page"
        >
          <NuxtIcon name="arrow-Right" />
        </button>
      </div>

      <div class="results-per-page">
        <p class="text-yellow">Display:</p>

        <select v-model="resultsPerPage" class="results-select">
          <option value="5">5 Results Per Page</option>
          <option value="10">10 Results Per Page</option>
          <option value="15">15 Results Per Page</option>
          <option value="20">20 Results Per Page</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .recipes-wrapper {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 md:gap-y-12;
  }

  .pagination-controls {
    @apply flex flex-col items-center justify-center gap-4 font-semibold md:flex-row md:justify-between;

    .pagination-buttons {
      @apply flex items-center gap-4;

      .pagination-button {
        @apply p-2 px-4 text-white rounded-lg outline-none  bg-red hover:bg-red/90 flex items-center gap-2;
      }
    }

    .results-per-page {
      @apply flex items-center gap-2;

      .results-select {
        @apply bg-white text-black border border-gray-100 outline-none text-sm  p-2.5;
      }
    }
  }
</style>
