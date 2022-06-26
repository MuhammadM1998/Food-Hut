<template>
  <section class="pt-2 pb-16">
    <div class="container">
      <h1 class="text-2xl font-bold text-gray-200 dark:text-white">
        Search results for:
        <span class="text-red">recipe name placholder</span>
      </h1>

      <div class="flex items-center gap-4 pt-16">
        <SearchResult :recipe="recipeTest" />
      </div>
    </div>
  </section>
</template>

<script setup>
  const recipeTest = reactive({
    name: 'Salad Booster',
    link: '5ed6604691c37cdc054bd097',
    publisher: '101 Cookbooks',
    imageUrl: 'http://forkify-api.herokuapp.com/images/salad_booster9ce2.jpg',
  });
</script>
