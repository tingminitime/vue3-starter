<script setup lang="ts">
</script>

<template>
  <nav class="mx-auto grid max-w-40 grid-cols-3 place-items-center">
    <RouterLink
      to="/"
      class="flex items-center justify-center rounded p-1 transition-all hover:bg-gray-300/50 dark:hover:bg-gray-700/50"
    >
      <span class="i-carbon-home text-2xl text-gray-700 dark:text-gray-300"></span>
    </RouterLink>

    <Link
      href="https://github.com/tingminitime"
      target="_blank"
      title="GitHub"
      class="flex items-center justify-center rounded p-1 transition-all hover:bg-gray-300/50 dark:hover:bg-gray-700/50"
    >
      <span class="i-carbon-logo-github text-2xl text-gray-700 dark:text-gray-300"></span>
    </Link>

    <ThemeSwitcher />
  </nav>
</template>

<style scope></style>
