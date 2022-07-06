<script setup>
  // Imports
  import { useRecipesStore } from '~/store/recipes';

  const props = defineProps({
    minutes: { type: Number, required: true },
    servings: { type: Number, required: true },
    recipe: { type: Object, required: true },
  });

  // Servings
  const emit = defineEmits(['update:minutes', 'update:servings']);

  const minServings = 2;
  const maxServings = 6;
  const minutesPerServing = Math.ceil(props.minutes / props.servings);

  const increaseServings = () => {
    const newMinutesValue = props.minutes + minutesPerServing;
    const newServingsValue = props.servings + 1;
    emit('update:minutes', newMinutesValue);
    emit('update:servings', newServingsValue);
  };

  const decreaseServings = () => {
    const newMinutesValue = props.minutes - minutesPerServing;
    const newServingsValue = props.servings - 1;
    emit('update:minutes', newMinutesValue);
    emit('update:servings', newServingsValue);
  };

  // Bookmarking a Recipe
  const recipesStore = useRecipesStore();

  const DoesRecipeExist = computed(() => {
    const recipeIndex = recipesStore.findRecipeIndex(props.recipe);

    if (recipeIndex === -1) return false;
    else return true;
  });

  const bookmarkRecipe = () => {
    recipesStore.bookmark(props.recipe);
  };
</script>

<template>
  <div
    class="flex items-center justify-between gap-4 lg:justify-center lg:gap-72"
  >
    <!-- Servings -->
    <div class="flex items-center gap-4 md:gap-12">
      <div class="flex items-center gap-2">
        <NuxtIcon name="clock" class="text-lg md:text-xl text-red" />
        <p class="dark:text-white">
          <span class="font-semibold">{{ minutes }}</span> Minutes
        </p>
      </div>

      <div class="flex items-center gap-2">
        <NuxtIcon name="users" class="text-lg md:text-xl text-red" />
        <p class="dark:text-white">
          <span class="font-semibold">{{ servings }}</span> People
        </p>

        <button
          class="transition-transform text-red hover:-translate-y-px"
          aria-label="Decrease People Served"
          @click="decreaseServings"
          v-if="servings > minServings"
        >
          <NuxtIcon name="minus-circle" />
        </button>

        <button
          class="transition-transform text-red hover:-translate-y-px"
          aria-label="Increase People Served"
          @click="increaseServings"
          v-if="servings < maxServings"
        >
          <NuxtIcon name="plus-circle" />
        </button>
      </div>
    </div>

    <!-- Bookmark Button -->
    <button
      aria-label="Bookmark recipe"
      @click.prevent="bookmarkRecipe"
      class="transition-transform hover:-translate-y-px"
    >
      <NuxtIcon v-if="!DoesRecipeExist" name="bookmark" class="bookmark-icon" />
      <NuxtIcon v-else name="bookmark-filled" class="bookmark-icon" />
    </button>
  </div>
</template>

<style scoped>
  .bookmark-icon {
    @apply text-lg  text-red md:text-xl;
  }
</style>
