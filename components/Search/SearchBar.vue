<script setup>
  const { navigateToSearch } = useRecipes();
  const searchInput = ref('');
  const searchInputRef = ref(null);

  const submitForm = () => {
    navigateToSearch(searchInput.value);
    searchInput.value = '';
    searchInputRef.value.blur();
  };
</script>

<template>
  <form @submit.prevent="submitForm">
    <input
      ref="searchInputRef"
      type="text"
      class="block w-full p-2 transition-colors border-2 border-r-0 border-gray-100 rounded-l-lg outline-none focus:border-black dark:border-transparent"
      placeholder="Search"
      aria-label="Search for recipes"
      v-model="searchInput"
    />

    <button
      type="submit"
      class="p-2 px-4 text-white rounded-r-lg outline-none md:px-6 bg-red hover:bg-red/90"
      aria-label="Search"
    >
      <NuxtIcon name="search" class="text-lg md:text-3xl" />
    </button>
  </form>
</template>

<style scoped>
  form {
    @apply max-w-xl flex transition-all focus-within:drop-shadow-md focus-within:-translate-y-0.5 bg-no-repeat bg-red-graident-light dark:bg-search-bookmarks-gradient bg-pale-white dark:bg-gray-300 md:bg-transparent md:bg-none md:dark:bg-transparent md:dark:bg-none;
  }
</style>
