<template>
  <div>
    <Header @toggle-nav="toggleNavStatus = !toggleNavStatus" />
    <Searchbox />
    <Nav :nav-state="toggleNavStatus" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleNavStatus: '',
    }
  },
}
</script>

<style lang="scss"></style>
