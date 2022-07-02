<script setup>
  const props = defineProps({
    minutes: { type: Number, required: true },
    servings: { type: Number, required: true },
  });
</script>

<template>
  <div
    class="flex items-center justify-between gap-4 lg:justify-center lg:gap-72"
  >
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
        >
          <NuxtIcon name="minus-circle" />
        </button>

        <button
          class="transition-transform text-red hover:-translate-y-px"
          aria-label="Increase People Served"
        >
          <NuxtIcon name="plus-circle" />
        </button>
      </div>
    </div>

    <!-- Bookmark Button -->
    <button aria-label="Bookmark recipe">
      <NuxtIcon name="bookmark" class="text-lg md:text-xl text-red" />
      <!-- <NuxtIcon name="bookmark-filled" class="text-xl text-red" /> -->
    </button>
  </div>
</template>
