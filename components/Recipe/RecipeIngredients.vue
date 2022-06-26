<template>
  <div class="flex flex-col gap-4 py-4 lg:items-center">
    <h2 class="text-xl font-semibold text-center text-yellow">
      Recipe Ingredients
    </h2>

    <ul class="ingredients-list">
      <li class="ingredient">
        <NuxtIcon name="check" class="icon" />
        <p>1 medium head cauliflower cut into florets</p>
      </li>

      <li class="ingredient">
        <NuxtIcon name="check" class="icon" />
        <p>1/2 cup mozzarella shredded</p>
      </li>

      <li class="ingredient">
        <NuxtIcon name="check" class="icon" />
        <p>Salt and pepper to taste</p>
      </li>

      <li class="ingredient">
        <NuxtIcon name="check" class="icon" />
        <p>1 cup chicken cooked and shredded</p>
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
