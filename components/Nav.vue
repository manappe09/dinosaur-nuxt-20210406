<template>
  <nav id="nav" class="p-nav" :class="{ 'is-open': toggleNavState }">
    <button id="nav-close" class="p-nav__close" @click="closeNav">×</button>
    <ul class="p-nav__list">
      <li class="p-nav__item">
        <p class="p-nav__category">カテゴリからさがす</p>
        <ul class="p-nav__sublist">
          <li class="p-nav__subitem">
            <NuxtLink to="/dinosaur" @click.native="closeNav()"
              >竜盤目</NuxtLink
            >
          </li>
          <li class="p-nav__subitem">
            <NuxtLink to="/dinosaur" @click.native="closeNav()"
              >鳥盤目</NuxtLink
            >
          </li>
        </ul>
      </li>
      <li class="p-nav__item">
        <NuxtLink to="/dinosaur" @click.native="closeNav()"
          >人気からさがす</NuxtLink
        >
      </li>
      <li class="p-nav__item">
        <NuxtLink to="/dinosaur" @click.native="closeNav()"
          >特徴からさがす</NuxtLink
        >
      </li>
      <li class="p-nav__item">
        <NuxtLink to="/register" @click.native="closeNav()">新規登録</NuxtLink>
      </li>
      <li class="p-nav__item">
        <NuxtLink to="/guide" @click.native="closeNav()">ご利用ガイド</NuxtLink>
      </li>
      <li class="p-nav__item">
        <NuxtLink to="/faq" @click.native="closeNav()">よくある質問</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['navState'],
  data() {
    return {
      toggleNavState: false,
    }
  },
  watch: {
    navState() {
      this.toggleNavState = true
    },
  },
  methods: {
    closeNav() {
      this.toggleNavState = false
    },
  },
}
</script>
