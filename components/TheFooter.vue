<template>
  <section class="py-12 text-gray-200 dark:text-white">
    <div class="container grid grid-cols-2 gap-8 lg:grid-cols-6">
      <div class="flex flex-col col-span-2">
        <Logo class="w-fit lg:-mt-4 lg:mx-auto" />

        <p>
          The perfect place for you to find your next amazing recipe! Start
          exploring your next meal now!
        </p>

        <ul class="flex gap-4 mt-4 text-xl lg:mx-auto">
          <li>
            <a href="#" aria-label="facebook">
              <NuxtIcon
                name="facebook"
                class="transition-colors text-yellow hover:text-red"
              />
            </a>
          </li>

          <li>
            <a href="#" aria-label="twitter">
              <NuxtIcon
                name="twitter"
                class="transition-colors text-yellow hover:text-red"
              />
            </a>
          </li>

          <li>
            <a href="#" aria-label="instagram">
              <NuxtIcon
                name="instagram"
                class="transition-colors text-yellow hover:text-red"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col col-span-1 gap-4">
        <h3 class="text-2xl font-bold text-red">About Us</h3>

        <ul class="flex flex-col gap-2">
          <li class="transition-colors hover:text-yellow">
            <a href="#">About Us</a>
          </li>

          <li class="transition-colors hover:text-yellow">
            <a href="#">Service Us</a>
          </li>

          <li class="transition-colors hover:text-yellow">
            <a href="#">Contact</a>
          </li>

          <li class="transition-colors hover:text-yellow">
            <a href="#">Company</a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col col-span-1 gap-4">
        <h3 class="text-2xl font-bold text-red">Company</h3>

        <ul class="flex flex-col gap-2">
          <li class="transition-colors hover:text-yellow">
            <a href="#">Partnership</a>
          </li>

          <li class="transition-colors hover:text-yellow">
            <a href="#">Terms of Use</a>
          </li>

          <li class="transition-colors hover:text-yellow">
            <a href="#">Privacy</a>
          </li>

          <li class="transition-colors hover:text-yellow">
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col col-span-2 gap-4">
        <h3 class="text-2xl font-bold text-red">Newsletter</h3>

        <p>
          Join our newsletter and get amazing recipes that will make lose your
          mind!. What are you waiting for? Can't you hear your belly? Join us
          now!
        </p>

        <form class="flex gap-4">
          <input
            class="px-6 py-4 bg-[#E8E8E8] rounded-full text-gray-200 outline-none placeholder:text-gray-100 w-[60%]"
            type="email"
            aria-label="Email"
            placeholder="Email"
          />

          <button
            @click.prevent=""
            class="px-6 py-4 text-white transition-opacity rounded-full bg-red hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
