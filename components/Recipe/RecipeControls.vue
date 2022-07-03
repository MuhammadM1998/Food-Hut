<script setup>
  const props = defineProps({
    minutes: { type: Number, required: true },
    servings: { type: Number, required: true },
  });

  const emit = defineEmits(['update:minutes', 'update:servings']);

  const minServings = 2;
  const maxServings = 6;
  const minutesPerServing = Math.ceil(props.minutes / props.servings);

  const increaseServings = () => {
    const newMinutesValue = props.minutes + minutesPerServing;
    const newServingsValue = props.servings + 1;
    emit('update:minutes', newMinutesValue);
    emit('update:servings', newServingsValue);
  };

  const decreaseServings = () => {
    const newMinutesValue = props.minutes - minutesPerServing;
    const newServingsValue = props.servings - 1;
    emit('update:minutes', newMinutesValue);
    emit('update:servings', newServingsValue);
  };
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
          @click="decreaseServings"
          v-if="servings > minServings"
        >
          <NuxtIcon name="minus-circle" />
        </button>

        <button
          class="transition-transform text-red hover:-translate-y-px"
          aria-label="Increase People Served"
          @click="increaseServings"
          v-if="servings < maxServings"
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
