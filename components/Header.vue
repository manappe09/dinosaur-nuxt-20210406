<template>
  <header class="p-header">
    <h1 class="p-header__title"><a href="/">恐竜ずかん</a></h1>
    <ul class="p-header__items">
      <li>
        <a id="searchbox" class="p-header__item" href="" title="さがす">
          <fa icon="search" class="fas fa-search p-header__item__icon" />
          <h3 class="p-header__item__name">さがす</h3>
        </a>
      </li>
      <li>
        <a class="p-header__item" href="/pages/login" title="ログイン">
          <fa icon="door-open" class="fas fa-door-open p-header__item__icon" />
          <h3 class="p-header__item__name">ログイン</h3>
        </a>
      </li>
      <li>
        <a id="menu" class="p-header__item" href="" title="メニューを開く">
          <fa icon="bars" class="fas fa-bars p-header__item__icon" />
          <h3 class="p-header__item__name">メニュー</h3>
        </a>
      </li>
    </ul>
  </header>
</template>
