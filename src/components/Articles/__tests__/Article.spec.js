import { shallowMount, createLocalVue } from '@vue/test-utils'
import Articles from '@/components/Articles/Articles'
import { data } from '@/mixins/cardElements'

const localVue = createLocalVue()

describe('Article.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Articles, {
      localVue,
      propsData: {
        options: data.data()
      }
    })
  })

  it('Article component mounts without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
