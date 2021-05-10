<template>
  <ul class="c-breadcrumbs">
    <li class="c-breadcrumbs-link"><NuxtLink to="/">TOP</NuxtLink></li>
    <li
      v-for="directory in directories"
      :key="directory.path"
      class="c-breadcrumbs-link"
    >
      <NuxtLink :to="directory.path">{{ directory.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    directories: {
      type: Array,
      default: null,
    },
  },
}
</script>
