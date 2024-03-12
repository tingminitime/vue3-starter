import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from '../counter'

describe('counter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('doubles', () => {
    const store = useCounterStore()
    store.doubleCount()
    expect(store.count).toBe(0)
  })

  it('decrements', () => {
    const store = useCounterStore()
    store.decrement()
    expect(store.count).toBe(-1)
  })
})
