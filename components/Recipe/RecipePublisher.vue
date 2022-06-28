<script setup>
  const props = defineProps({
    publisherName: { type: String, required: true },
    publisherUrl: { type: String, required: true },
    directionsUrl: { type: String, required: true },
  });
</script>

<template>
  <div class="flex flex-col gap-4 py-4 lg:items-center">
    <h2 class="text-xl font-semibold text-center text-yellow">
      How to cook it!
    </h2>

    <p class="text-sm text-gray-100 dark:text-white">
      This recipe was carefully designed and tested by
      <a :href="publisherUrl" target="_blank" class="font-semibold text-red">
        {{ publisherName }}
      </a>
      . Please check out directions at their website.
    </p>

    <a
      :href="directionsUrl"
      target="_blank"
      class="flex items-center gap-2 p-2 px-4 mx-auto text-white transition rounded-full bg-red hover:scale-105"
    >
      <span class="text-xl font-semibold">Directions</span>
      <NuxtIcon name="arrow-Right" />
    </a>
  </div>
</template>
