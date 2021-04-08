<template>
  <footer class="p-footer">
    <div class="p-footer__block">
      <p class="p-footer__subtitle">ヘルプ</p>
      <ul class="p-footer__list">
        <li class="p-footer__item">
          <NuxtLink to="/dinosaur">恐竜をさがす</NuxtLink>
        </li>
        <li class="p-footer__item">
          <NuxtLink to="/guide">ご利用ガイド</NuxtLink>
        </li>
        <li class="p-footer__item">
          <NuxtLink to="/faq">よくある質問</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="p-footer__block">
      <p class="p-footer__subtitle">サイトについて</p>
      <ul class="p-footer__list">
        <li class="p-footer__item">
          <NuxtLink to="/common/agreement">利用規約</NuxtLink>
        </li>
        <li class="p-footer__item">
          <NuxtLink to="/common/privacy">プライバシーポリシー</NuxtLink>
        </li>
        <li class="p-footer__item">
          <NuxtLink to="/common/contact">お問い合わせ</NuxtLink>
        </li>
      </ul>
    </div>
    <p class="p-footer__copyright">©️manappe 2021</p>
  </footer>
</template>
