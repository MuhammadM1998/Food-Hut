<script setup>
  const props = defineProps({
    ingredientsList: { type: Array, required: true },
    minutes: { type: Number, required: true },
    servings: { type: Number, required: true },
  });

  const initialServings = props.servings;

  const ingredients = computed(() => {
    return props.ingredientsList.map((item) => {
      return {
        id: item.id,
        amount: Math.ceil(props.servings * (item.amount / initialServings)),
        unit: item.unit,
        originalName: item.originalName,
      };
    });
  });
</script>

<template>
  <div class="flex flex-col gap-4 py-4 lg:items-center">
    <h2 class="text-xl font-semibold text-center text-yellow">
      Recipe Ingredients
    </h2>

    <ul class="ingredients-list">
      <li
        class="ingredient"
        v-for="ingredient in ingredients"
        :key="ingredient.id"
      >
        <NuxtIcon name="check" class="icon" />
        <p class="max-w-sm">
          {{ ingredient.amount }}
          {{ ingredient.unit }}
          {{ ingredient.originalName }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .ingredients-list {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-16;

    .ingredient {
      @apply flex items-center gap-2 text-sm text-gray-100  dark:text-white;

      .icon {
        @apply text-red;
      }
    }
  }
</style>
