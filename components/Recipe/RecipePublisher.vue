<template>
  <div class="flex flex-col gap-4 py-4 lg:items-center">
    <h2 class="text-xl font-semibold text-center text-yellow">
      How to cook it!
    </h2>

    <p class="text-sm text-gray-100 dark:text-white">
      This recipe was carefully designed and tested by
      <span class="font-semibold text-red">Closet Cooking</span>. Please check
      out directions at their website.
    </p>

    <a
      href=""
      class="flex items-center gap-2 p-2 px-4 mx-auto text-white transition rounded-full bg-red hover:scale-105"
    >
      <span class="text-xl font-semibold">Directions</span>
      <NuxtIcon name="arrow-Right" />
    </a>
  </div>
</template>
