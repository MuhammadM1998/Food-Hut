<template>
  <NuxtLink to="/" aria-label="Food Hut Logo">
    <NuxtIcon
      v-if="colorMode.value === 'light'"
      name="Food-Hut-Logo-Dark"
      fill
      class="text-7xl sm:text-8xl md:text-9xl"
    />

    <NuxtIcon
      v-else
      name="Food-Hut-Logo-Light"
      fill
      class="text-7xl sm:text-8xl md:text-9xl"
    />
  </NuxtLink>
</template>

<script setup>
  const colorMode = useColorMode();
</script>
