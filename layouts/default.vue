<template>
  <div>
    <Header @toggle-nav="navClickedTrigger = !navClickedTrigger" />
    <Searchbox />
    <Nav :nav-state="navClickedTrigger" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navClickedTrigger: false,
    }
  },
}
</script>

<style lang="scss"></style>
