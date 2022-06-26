<template>
  <nav class="nav-menu" :class="{ 'nav-menu--visible': isVisible }">
    <NavSearchBar />

    <ul class="flex flex-col gap-4 text-center">
      <li><NavAddRecipe /></li>

      <li><NavBookmarks /></li>
    </ul>
  </nav>
</template>

<script setup>
  const props = defineProps({
    isVisible: { type: Boolean, required: true, default: false },
  });
</script>

<style>
  .nav-menu {
    @apply absolute right-0 w-full top-[4.5rem] sm:top-[6rem] md:top-[8rem] transition-all shadow-md rounded py-6 px-4 border border-[#e1e1e1] translate-x-[200%] lg:static lg:translate-x-0 flex flex-col gap-4  lg:flex-row lg:shadow-none lg:border-none lg:items-center lg:justify-center dark:border-gray-100;
  }

  .nav-menu.nav-menu--visible {
    @apply translate-x-0;
  }

  .nav-menu ul {
    @apply lg:flex-row lg:items-center;
  }
</style>
