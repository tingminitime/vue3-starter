<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ store.count }}</p>
    <div class="flex justify-center gap-x-2">
      <button
        type="button"
        @click="store.decrement"
      >
        Decrement
      </button>
      <button
        type="button"
        @click="store.increment"
      >
        Increment
      </button>
      <button
        type="button"
        @click="store.doubleCount"
      >
        Double Count
      </button>
    </div>
  </div>
</template>

<style scope></style>
