<template>
  <nav class="nav" id="nav" v-if="routes">
    <slot></slot>
    <ul class="nav__list">
      <li class="list__item" v-for="(route, index) in routes" :key="index">
        <router-link
          :to="route.path"
          :key="$route.fullPath">{{ route.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
