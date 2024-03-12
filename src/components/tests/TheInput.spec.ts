import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TheInput from '../TheInput.vue'

describe('test component TheInput', () => {
  it('component of TheInput.vue', () => {
    const wrapper = mount(TheInput)
    expect(wrapper.find('[data-test="input"]').exists()).toBe(true)
  })

  it('modelValue should be updated', async () => {
    const wrapper = mount(TheInput, {
      props: {
        'modelValue': 'initial text',
        'onUpdate:modelValue': (value: string) => {
          wrapper.setProps({ modelValue: value })
        },
      },
    })

    await wrapper.get('[data-test="input"]').setValue('Hello')
    const emitted = wrapper.emitted('update:modelValue')?.[0]
    expect(emitted).toEqual(['Hello'])
  })
})
