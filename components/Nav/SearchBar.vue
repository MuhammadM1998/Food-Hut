<template>
  <form
    class="flex transition-all focus-within:drop-shadow-md focus-within:-translate-y-0.5"
    @submit.prevent="submitForm"
  >
    <input
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

<script setup>
  const searchInput = ref('');

  const emit = defineEmits(['searchClicked']);

  const submitForm = (e) => {
    emit('searchClicked', searchInput.value);
  };
</script>
