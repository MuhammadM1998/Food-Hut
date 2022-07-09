<template>
  <div>
    <ClientOnly>
      <NuxtLink to="/" aria-label="Food Hut Logo">
        <NuxtIcon
          v-if="colorMode.value === 'light'"
          name="Food-Hut-Logo-Dark"
          fill
          class="text-7xl sm:text-8xl md:text-9xl"
        />

        <NuxtIcon
          v-if="colorMode.value === 'dark'"
          name="Food-Hut-Logo-Light"
          fill
          class="text-7xl sm:text-8xl md:text-9xl"
        />
      </NuxtLink>

      <template #placeholder>
        <img
          src="~/public/favicon.ico"
          alt="Food Hut Logo"
          class="w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] md:w-[128px] md:h-[128px]"
        />
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
  const colorMode = useColorMode();
</script>
