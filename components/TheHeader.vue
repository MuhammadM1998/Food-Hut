<template>
  <header class="relative">
    <div class="container flex items-center justify-between gap-4">
      <Logo />

      <SearchBar
        ref="target"
        class="search-bar"
        :class="{ 'search-bar--visible': isMobileNavVisible }"
      />

      <!-- Controls -->
      <div class="flex flex-row order-2 gap-4">
        <NavHamburger
          ref="searchButton"
          @click="toggleMobileNav"
          class="md:hidden"
        />
        <NavBookmarks />
        <NavDarkModeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
  import { onClickOutside } from '@vueuse/core';

  // Mobile Nav
  const isMobileNavVisible = ref(false);
  const searchButton = ref(null);
  const target = ref(null);

  onClickOutside(target, () => (isMobileNavVisible.value = false), {
    ignore: [searchButton],
  });

  const toggleMobileNav = () => {
    isMobileNavVisible.value = !isMobileNavVisible.value;
  };
</script>

<style>
  .search-bar {
    @apply absolute right-0 w-full top-[4.5rem] sm:top-[6rem] md:top-[8rem] transition-all shadow-md rounded py-6 px-4 border border-[#e1e1e1] translate-x-[200%] md:static md:translate-x-0 flex gap-0  md:flex-row md:shadow-none md:border-none md:items-center md:justify-center dark:border-gray-100;
  }

  .search-bar.search-bar--visible {
    @apply translate-x-0;
  }
</style>
