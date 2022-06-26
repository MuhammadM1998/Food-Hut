<template>
  <section class="pt-2 pb-16">
    <div class="container flex flex-col gap-4">
      <h1 class="recipe-name">Recipe Name</h1>
      <RecipeImage />
      <RecipeControls />
      <RecipeIngredients />
      <RecipePublisher />
    </div>
  </section>
</template>

<style scoped>
  .recipe-name {
    @apply text-2xl font-bold text-center text-red;
  }
</style>
