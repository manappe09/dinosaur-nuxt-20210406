<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-mgt-20 u-align-c">マイページ</h2>
    <p class="p-mypage__name">ニックネーム</p>
    <h3 class="c-subtitle">お気に入りした恐竜</h3>
    <div class="p-mypage__list__wrapper">
      <ul class="p-mypage__list">
        <li class="p-mypage__item">
          <NuxtLink to="/dinosaur/t-rex" class="c-box c-box--column">
            <img
              class="c-box__image c-box__image--column"
              src="~/assets/images/slide02.png"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span class="p-dinosaur__category" data-category="bird"
                >鳥盤類</span
              >
              <p>トリケラトプス</p>
            </div>
          </NuxtLink>
        </li>
        <li class="p-mypage__item">
          <NuxtLink to="/dinosaur/t-rex" class="c-box c-box--column">
            <img
              class="c-box__image c-box__image--column"
              src="~/assets/images/slide02.png"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span class="p-dinosaur__category" data-category="bird"
                >鳥盤類</span
              >
              <p>トリケラトプス</p>
            </div>
          </NuxtLink>
        </li>
        <li class="p-mypage__item">
          <NuxtLink to="/dinosaur/t-rex" class="c-box c-box--column">
            <img
              class="c-box__image c-box__image--column"
              src="~/assets/images/slide02.png"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span class="p-dinosaur__category" data-category="bird"
                >鳥盤類</span
              >
              <p>トリケラトプス</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="p-mypage__list__wrapper u-mgt-40">
      <h3 class="c-subtitle">お気に入りした博物館・公園</h3>
      <ul class="p-mypage__list">
        <li class="p-mypage__item">
          <NuxtLink to="/dinosaur/t-rex" class="c-box c-box--column">
            <img
              class="c-box__image c-box__image--column"
              src="~/assets/images/slide02.png"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span class="p-dinosaur__category" data-category="bird"
                >鳥盤類</span
              >
              <p>トリケラトプス</p>
            </div>
          </NuxtLink>
        </li>
        <li class="p-mypage__item">
          <NuxtLink to="/dinosaur/t-rex" class="c-box c-box--column">
            <img
              class="c-box__image c-box__image--column"
              src="~/assets/images/slide02.png"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span class="p-dinosaur__category" data-category="bird"
                >鳥盤類</span
              >
              <p>トリケラトプス</p>
            </div>
          </NuxtLink>
        </li>
        <li class="p-mypage__item">
          <NuxtLink to="/dinosaur/t-rex" class="c-box c-box--column">
            <img
              class="c-box__image c-box__image--column"
              src="~/assets/images/slide02.png"
              alt=""
              width="100"
              height="100"
            />
            <div class="c-box__text c-box__text--column">
              <span class="p-dinosaur__category" data-category="bird"
                >鳥盤類</span
              >
              <p>トリケラトプス</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <h3 class="c-subtitle u-mgt-80 u-mgb-10">マイページメニュー</h3>
    <NuxtLink to="" class="c-listitem c-listitem--next"
      >設定を変更する</NuxtLink
    >
    <NuxtLink to="" class="c-listitem c-listitem--next">ログアウト</NuxtLink>
  </main>
</template>
