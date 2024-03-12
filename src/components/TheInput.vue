<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    data-test="input"
    type="text"
    v-bind="$attrs"
    class="rounded bg-transparent px-4 py-2 text-center"
  >
</template>

<style scope></style>
