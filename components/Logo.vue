<template>
  <NuxtLink to="/" aria-label="Food Hut Logo">
    <NuxtIcon
      v-if="colorMode.preference === 'light'"
      name="Food-Hut-Logo-Dark"
      fill
      class="text-7xl sm:text-8xl md:text-9xl dark:text-white"
    />

    <NuxtIcon
      v-if="colorMode.preference === 'dark'"
      name="Food-Hut-Logo-Light"
      fill
      class="text-7xl sm:text-8xl md:text-9xl dark:text-white"
    />
  </NuxtLink>
</template>

<script setup>
  const colorMode = useColorMode();
</script>
