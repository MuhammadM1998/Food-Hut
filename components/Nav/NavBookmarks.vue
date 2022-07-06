<script setup>
  // Imports
  import { useRecipesStore } from '~/store/recipes';
  import { onClickOutside } from '@vueuse/core';

  // Bookmarks Menu
  const isBookmarksVisible = ref(false);
  const bookmarksButton = ref(null);
  const target = ref(null);

  onClickOutside(target, () => (isBookmarksVisible.value = false), {
    ignore: [bookmarksButton],
  });

  const toggleBookmarks = () => {
    isBookmarksVisible.value = !isBookmarksVisible.value;
  };

  // Bookmarking a Recipe
  const recipesStore = useRecipesStore();

  onMounted(() => {
    recipesStore.fetchRecipes();
  });
</script>

<template>
  <div>
    <button
      ref="bookmarksButton"
      class="flex items-center gap-2 p-2 rounded-lg group"
      @click="toggleBookmarks"
    >
      <NuxtIcon name="bookmark" class="text-2xl text-red" />
    </button>

    <div ref="target" class="bookmarks-menu" v-show="isBookmarksVisible">
      <p v-if="recipesStore.getRecipes.length === 0" class="dark:text-white">
        No bookmarks found.
      </p>

      <div v-else v-for="recipe in recipesStore.getRecipes" :key="recipe.id">
        <NuxtLink :to="`/recipe/${recipe.id}`" class="recipe">
          <img
            class="recipe-image"
            :src="recipe.image"
            :alt="recipe.title"
            loading="lazy"
          />

          <div class="flex flex-col">
            <h4 class="recipe-name">{{ recipe.title }}</h4>
            <p class="recipe-publisher">{{ recipe.publisher }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .bookmarks-menu {
    @apply container absolute right-0 left-0 top-[4.5rem] sm:top-[6rem] md:top-[8rem] lg:min-w-[450px] lg:max-w-fit lg:mr-2 z-10 flex flex-col gap-6 px-8 py-4 bg-search-bookmarks-gradient bg-pale-white dark:bg-gray-300 rounded shadow-lg transition-all;
  }

  .recipe {
    @apply flex gap-4 items-center;

    &-image {
      @apply rounded-full  w-12 h-12 border-4 border-transparent bg-image-border-gradient bg-origin-border object-cover;
    }

    &-name {
      @apply font-bold text-red dark:text-yellow;
    }

    &-publisher {
      @apply font-medium text-gray-200 dark:text-white;
    }
  }
</style>
