import { shallowMount, createLocalVue } from '@vue/test-utils'
import Articles from '@/components/Articles/Articles'
// import TestHelpers from '@/../tests/helpers'

const localVue = createLocalVue()

describe('Article.vue', () => {
  let wrapper
  // var h
  beforeEach(() => {
    wrapper = shallowMount(Articles, {
      localVue
    })
    // h = new TestHelpers(wrapper, expect)
  })

  it('Article component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
