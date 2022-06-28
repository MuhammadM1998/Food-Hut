<script setup>
  const props = defineProps({
    imageUrl: { type: String, required: true },
    imageAlt: { type: String, required: true },
  });
</script>

<template>
  <img class="max-h-[550px] mx-auto" :src="imageUrl" :alt="imageAlt" />
</template>
