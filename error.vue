<script setup>
  useHead({
    title: `Page Not Found`,
    meta: [
      {
        name: 'description',
        content: 'Food Hut Error Page, Find Your Next Amazing Recipes',
      },
    ],
  });
</script>

<template>
  <div class="overflow-hidden">
    <TheHeader />

    <section
      class="container flex flex-col lg:flex-row-reverse py-12 justify-between gap-16 items-center min-h-[70vh]"
    >
      <NuxtIcon
        name="404"
        fill
        class="text-[12rem] lg:text-[40rem] scale-[2.5] lg:scale-150"
      />

      <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-bold dark:text-white lg:leading-tight">
          Whooops!
        </h1>

        <p class="text-gray-100 dark:text-white">
          Sorry,the page you are looking for doesn't exist.
        </p>

        <NuxtLink
          to="/"
          class="px-8 py-3 text-white transition-opacity rounded-full lg:m-0 lg:mt-12 w-fit bg-red hover:opacity-90"
        >
          Go Back
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
