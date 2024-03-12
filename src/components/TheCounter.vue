<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div>
    <p class="mb-4">
      Count: {{ store.count }}
    </p>
    <div class="mx-auto grid max-w-[30rem] grid-cols-1 gap-4 md:grid-cols-[repeat(3,_minmax(8rem,_1fr))]">
      <button
        type="button"
        class="my-btn"
        @click="store.decrement"
      >
        Decrement
      </button>
      <button
        type="button"
        class="my-btn"
        @click="store.increment"
      >
        Increment
      </button>
      <button
        type="button"
        class="my-btn"
        @click="store.doubleCount"
      >
        Double Count
      </button>
    </div>
  </div>
</template>

<style scope></style>
