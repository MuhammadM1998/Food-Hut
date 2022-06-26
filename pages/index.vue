<template>
  <section class="pt-2 pb-8">
    <div
      class="container min-h-[80vh] flex flex-col-reverse items-center gap-12 lg:flex-row"
    >
      <div class="flex flex-col gap-4 lg:basis-full">
        <div
          class="flex items-center gap-2 px-2 py-1 bg-[#FDDDDD] w-fit rounded-full"
        >
          <NuxtIcon name="Heart" fill class="text-lg" />
          <p>People trust us</p>
        </div>

        <h1 class="mb-4 text-5xl font-bold dark:text-white">
          We're <span class="text-red">Serious</span> For
          <span class="text-red">Food</span> &
          <span class="delivery">Delivery</span>.
        </h1>

        <!-- <img src="assets/images/text-decore.png" alt="" /> -->

        <p class="text-gray-100 dark:text-white">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>

        <NavSearchBar />
      </div>

      <div class="grid lg:basis-full place-content-center">
        <picture>
          <source
            media="(max-width: 1023px)"
            srcset="assets/images/happy-client-mobile.png"
          />
          <source
            media="(min-width: 1024px)"
            srcset="assets/images/happy-client-desktop.png"
          />
          <img
            src="assets/images/happy-client-mobile.png"
            alt="One of our happy clients"
          />
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .delivery {
    @apply text-yellow relative after:bg-text-decore after:bg-no-repeat after:w-full after:h-3 after:-bottom-1 after:-left-1 after:absolute;
  }
</style>

<style>
  body {
    @apply bg-no-repeat bg-red-graident-light dark:bg-red-graident-dark bg-pale-white dark:bg-gray-300 transition-colors font-poppins;
  }

  .nuxt-icon svg {
    @apply m-0;
  }
</style>
