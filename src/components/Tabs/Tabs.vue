<template>
  <div class="tabs">
    <div class="tabs__nav">
      <div class="tabs__item" v-for="(tab, index) in tabs" :key="`tabs-${index}`">
        <a class="tabs__item-link" :class="activeTab === tab ? 'active' : ''" href="#" @click="(e) => activeTab = tab" >
          {{ tab.title }}
        </a>
      </div>
    </div>

    <div class="tabs__content" v-for="(tab, index) in tabs" :key="`tab-content-${index}`" v-if="tab === activeTab">
      {{ tab.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      activeTab: this.tabs[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {

  .tabs__nav {
    display: flex;
    width: 100%;
  }

  .tabs__item {
    flex: 1 1 100%;
  }
}
</style>
