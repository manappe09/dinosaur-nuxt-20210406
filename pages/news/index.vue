<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-align-c">お知らせ一覧</h2>
    <ul class="p-news">
      <li class="p-news__item c-listitem">
        <span class="p-news__date">2021/05/03</span>
        <span class="p-news__category" data-category="announce">ご注意</span>
        <NuxtLink to="/pages/news/4"
          ><span class="p-news__link"
            >一部利用規約が変更になりました。</span
          ></NuxtLink
        >
      </li>
      <li class="p-news__item c-listitem">
        <span class="p-news__date">2021/05/01</span>
        <span class="p-news__category" data-category="news">お知らせ</span>
        <NuxtLink to="/pages/news/3"
          ><span class="p-news__link"
            >追加機能〇〇をリリースしました！</span
          ></NuxtLink
        >
      </li>
      <li class="p-news__item c-listitem">
        <span class="p-news__date">2021/03/01</span>
        <span class="p-news__category" data-category="news">お知らせ</span>
        <NuxtLink to="/pages/news/2"
          ><span class="p-news__link"
            >新しい公園を追加しました！</span
          ></NuxtLink
        >
      </li>
      <li class="p-news__item c-listitem">
        <span class="p-news__date">2021/03/01</span>
        <span class="p-news__category" data-category="news">お知らせ</span>
        <NuxtLink to="/pages/news/1"
          ><span class="p-news__link"
            >恐竜ずかんのWEBサイトが公開されました！</span
          ></NuxtLink
        >
      </li>
      <li class="p-news__item c-listitem">
        <span class="p-news__date">2021/03/01</span>
        <span class="p-news__category" data-category="news">お知らせデモ</span>
        <span class="p-news__link"
          >全時代の恐竜が大迫力で展示されています。1日遊べる博物館です。</span
        >
      </li>
      <li class="p-news__item c-listitem">
        <span class="p-news__date">2021/03/01</span>
        <span class="p-news__category" data-category="announce"
          >お知らせデモ</span
        >
        <span class="p-news__link"
          >全時代の恐竜が大迫力で展示されています。1日遊べる博物館です。</span
        >
      </li>
      <li class="p-news__item c-listitem">
        <span class="p-news__date">2021/03/01</span>
        <span class="p-news__category" data-category="announce"
          >お知らせデモ</span
        >
        <span class="p-news__link"
          >全時代の恐竜が大迫力で展示されています。1日遊べる博物館です。</span
        >
      </li>
    </ul>
  </main>
</template>
