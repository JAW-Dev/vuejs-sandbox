import vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Articles from '@/components/Articles/Articles'
// import TestHelpers from '@/../tests/helpers'

const localVue = createLocalVue()
localVue.use(vuex)

describe('Article.vue', () => {
  let wrapper
  let store
  // var h
  beforeEach(() => {
    store = new vuex.Store({
      modules: {
        articles: {
          namespaced: true,
          getters: {
            articles: () => [],
            getArticles: () => [],
            hasArticles: () => true
          }
        }
      }
    })
    wrapper = shallowMount(Articles, {
      localVue,
      store
    })
    // h = new TestHelpers(wrapper, expect)
  })

  it('Article component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
