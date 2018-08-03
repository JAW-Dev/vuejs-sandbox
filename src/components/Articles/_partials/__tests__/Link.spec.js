import { shallowMount } from '@vue/test-utils'
import Link from '@/components/Articles/_partials/Link'
import TestHelpers from '@/../tests/helpers'
import { article, options } from '@/../tests/dummy-data'

describe('component.vue', () => {
  let wrapper
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    wrapper = shallowMount(Link, {
      propsData: {
        article: article,
        options: options
      }
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Author component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
