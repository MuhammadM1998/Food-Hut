<script setup>
  const props = defineProps({
    isActivated: { type: Boolean, required: true, default: false },
  });
</script>

<template>
  <div class="min-h-[70vh] grid place-content-center">
    <NuxtIcon
      name="loader"
      class="loader"
      :class="{ 'loader--activated': isActivated }"
    />

    <p class="mt-4 text-2xl font-semibold text-center text-yellow">
      Searching ...
    </p>
  </div>
</template>

<style lang="scss">
  .loader {
    @apply text-9xl text-red;

    &--activated {
      svg {
        @apply animate-spin-slow;
      }
    }
  }
</style>
