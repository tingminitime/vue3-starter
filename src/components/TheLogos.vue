<script setup lang="ts">
import { logos } from '~/constants'
</script>

<template>
  <div class="grid grid-cols-3 place-content-center gap-x-2 md:grid-cols-[repeat(5,_minmax(100px,_auto))]">
    <a
      v-for="logo in logos"
      :key="logo.text"
      class="my-link flex flex-col items-center px-4 py-2"
      :href="logo.href"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        :src="logo.imgSrc"
        class="size-16 p-2"
      >
      <span :class="logo.textColor">{{ logo.text }}</span>
    </a>
  </div>
</template>
