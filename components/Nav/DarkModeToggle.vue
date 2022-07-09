<template>
  <div class="flex items-center">
    <ClientOnly>
      <button
        class="text-red"
        @click="toggleColorMode('light')"
        v-show="colorMode.value === 'dark'"
        type="button"
        aria-label="Switch to light mode"
      >
        <NuxtIcon name="mode-dark" class="text-3xl" />
      </button>

      <button
        class="text-yellow"
        @click="toggleColorMode('dark')"
        v-show="colorMode.value === 'light'"
        type="button"
        aria-label="Switch to dark mode"
      >
        <NuxtIcon name="mode-light" class="text-3xl" />
      </button>

      <template #placeholder>
        <NuxtIcon name="system" class="text-2xl text-red" />
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
  const colorMode = useColorMode();

  const toggleColorMode = (newMode) => {
    colorMode.preference = newMode;
  };
</script>
