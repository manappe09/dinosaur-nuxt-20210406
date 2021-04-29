<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-align-c">ご利用ガイド</h2>
    <ul class="p-guide">
      <li class="p-guide__item c-listitem c-listitem--next">
        <NuxtLink to="/guide/login"
          ><span class="p-guide__link">ログインの仕方</span></NuxtLink
        >
      </li>
      <li class="p-guide__item c-listitem c-listitem--next">
        <NuxtLink to="/guide/mypage"
          ><span class="p-guide__link">マイページについて</span></NuxtLink
        >
      </li>
      <li class="p-guide__item c-listitem c-listitem--next">
        <NuxtLink to="/guide/register"
          ><span class="p-guide__link">登録方法</span></NuxtLink
        >
      </li>
      <li class="p-guide__item c-listitem c-listitem--next">
        <NuxtLink to="/guide/website"
          ><span class="p-guide__link">このサイトについて</span></NuxtLink
        >
      </li>
      <li class="p-guide__item c-listitem c-listitem--next">
        <NuxtLink to="/guide/sequrity"
          ><span class="p-guide__link">セキュリティについて</span></NuxtLink
        >
      </li>
      <li class="p-guide__item c-listitem c-listitem--next">
        <NuxtLink to="/guide/mailmagazine"
          ><span class="p-guide__link">メールマガジンについて</span></NuxtLink
        >
      </li>
    </ul>
  </main>
</template>
