import vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Articles from '@/components/Articles/Articles'
import TestHelpers from '@/../tests/helpers'
// import { state, getters, mutations, actions } from '@/store/modules/articles'

const localVue = createLocalVue()
localVue.use(vuex)

describe('Article.vue', () => {
  let wrapper
  let store
  // eslint-disable-next-line
  let h
  beforeEach(() => {
    store = new vuex.Store({})
    wrapper = shallowMount(Articles, {
      localVue,
      store,
      mocks: {},
      stubs: {}
    })
    h = new TestHelpers(wrapper, expect)
  })

  it('Article component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
