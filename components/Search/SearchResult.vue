<script setup>
  const props = defineProps({ recipe: { type: Object, required: false } });
</script>

<template>
  <NuxtLink :to="`/recipe/${recipe.id}`">
    <div class="recipe">
      <img
        class="recipe-image"
        :src="recipe.image"
        :alt="recipe.title"
        loading="lazy"
      />

      <div class="flex flex-col gap-2">
        <h4 class="recipe-name">{{ recipe.title }}</h4>
        <p class="recipe-publisher">{{ recipe.sourceName || 'Spoonacular' }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .recipe {
    @apply flex flex-row md:flex-col items-center gap-4 px-4 py-4 rounded-lg bg-recipe-item-gradient-mobile md:bg-recipe-item-gradient-desktop  text-left md:text-center min-h-[13rem];

    &-image {
      @apply md:-translate-y-12 rounded-full  w-28 h-28 border-4 border-transparent bg-image-border-gradient bg-origin-border object-cover transition-transform min-w-[7rem];
    }

    &-name {
      @apply md:-mt-12 text-xl font-bold text-red dark:text-yellow whitespace-pre-wrap;
    }

    &-publisher {
      @apply font-medium text-gray-200 dark:text-white;
    }
  }
</style>
