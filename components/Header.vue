<template>
  <header class="p-header">
    <h1 class="p-header__title"><NuxtLink to="/">恐竜ずかん</NuxtLink></h1>
    <ul class="p-header__items">
      <li>
        <NuxtLink
          id="searchbox"
          class="p-header__item"
          to="/dinosaur"
          title="さがす"
        >
          <fa icon="search" class="fas fa-search p-header__item__icon" />
          <h3 class="p-header__item__name">さがす</h3>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="p-header__item" to="/login" title="ログイン">
          <fa icon="door-open" class="fas fa-door-open p-header__item__icon" />
          <h3 class="p-header__item__name">ログイン</h3>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink id="menu" class="p-header__item" to="" title="メニューを開く">
          <fa icon="bars" class="fas fa-bars p-header__item__icon" />
          <h3 class="p-header__item__name">メニュー</h3>
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>
