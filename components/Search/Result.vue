<script setup>
  const props = defineProps({ recipe: { type: Object, required: false } });
</script>

<template>
  <NuxtLink to="/recipe-id">
    <div class="recipe">
      <img class="recipe-image" :src="recipe.imageUrl" :alt="recipe.name" />

      <div class="flex flex-col gap-2">
        <h4 class="recipe-name">{{ recipe.name }}</h4>
        <p class="recipe-publisher">{{ recipe.publisher }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .recipe {
    @apply flex flex-row md:flex-col items-center gap-2 px-4 py-4 text-center rounded-lg bg-recipe-item-gradient-mobile md:bg-recipe-item-gradient-desktop;

    &-image {
      @apply md:-translate-y-12 rounded-full  w-28 h-28 border-4 border-transparent bg-image-border-gradient bg-origin-border;
    }

    &-name {
      @apply md:-mt-12 text-xl font-bold text-red;
    }

    &-publisher {
      @apply font-medium text-gray-200 dark:text-white;
    }
  }
</style>
