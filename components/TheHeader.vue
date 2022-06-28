<template>
  <header class="relative" :class="{ 'overflow-hidden': !isMobileNavVisible }">
    <div class="container flex items-center justify-between gap-4">
      <Logo />

      <!-- Controls -->
      <div class="flex flex-row order-2 gap-4">
        <NavDarkModeToggle />
        <NavHamburger @click="toggleMobileNav" class="lg:hidden" />
      </div>

      <NavBar :isVisible="isMobileNavVisible" />
    </div>
  </header>
</template>

<script setup>
  // Mobile Nav
  const isMobileNavVisible = ref(false);
  const toggleMobileNav = () => {
    isMobileNavVisible.value = !isMobileNavVisible.value;
  };
</script>
