import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  function doubleCount() {
    count.value *= 2
  }

  function decrement() {
    count.value--
  }

  return {
    count,
    increment,
    doubleCount,
    decrement,
  }
})
