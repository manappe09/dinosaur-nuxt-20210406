<template>
  <main class="l-main">
    <!-- スライダー -->
    <!-- TODO: あとでいれる -->
    <!-- <SwiperTop /> -->
    <!-- /スライダー -->
    <!-- 最近のお知らせ -->
    <section class="p-newstop u-mgt-40 u-mgb-80">
      <ul class="p-newstop__list">
        <li class="p-newstop__item">
          <NuxtLink to="/news/4">
            <span class="p-news__category" data-category="announce">ご注意</span
            >一部利用規約が変更になりました。
          </NuxtLink>
        </li>
        <li class="p-newstop__item">
          <NuxtLink to="/news/3">
            <span class="p-news__category" data-category="news">お知らせ</span
            >追加機能〇〇をリリースしました！
          </NuxtLink>
        </li>
        <li class="p-newstop__item">
          <NuxtLink to="/news/2">
            <span class="p-news__category" data-category="news">お知らせ</span
            >新しい公園を追加しました！
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/news" class="c-button c-button--third u-mgt-20"
        >お知らせ一覧へ</NuxtLink
      >
    </section>
    <!-- /最近のお知らせ -->
    <!-- 恐竜を探す -->
    <section class="p-searchtop u-mgb-80 c-pc_content--m">
      <img
        class="p-searchtop__image"
        src="~/assets/images/search-dinosaur01.png"
        alt=""
      />
      <div class="p-searchtop__list u-mgt-10">
        <NuxtLink to="/dinosaur" class="p-searchtop__link"
          >種類で<br />さがす</NuxtLink
        >
        <NuxtLink to="/dinosaur" class="p-searchtop__link"
          >50音順で<br />さがす</NuxtLink
        >
      </div>
    </section>
    <!-- /恐竜を探す -->
    <!-- 恐竜ランキング -->
    <section class="p-rankingtop u-mgb-80">
      <h2 class="c-title c-title--primary u-align-c u-mgb-20">
        恐竜人気ランキング
      </h2>
      <ul class="p-rankingtop__list">
        <li class="p-rankingtop__item" data-index="1">
          <NuxtLink to="/dinosaur/t-rex"
            ><img
              class="p-rankingtop__image"
              src="~/assets/images/slide01.png"
              alt=""
          /></NuxtLink>
        </li>
        <li class="p-rankingtop__item" data-index="2">
          <NuxtLink to="/dinosaur/t-rex"
            ><img
              class="p-rankingtop__image"
              src="~/assets/images/slide01.png"
              alt=""
          /></NuxtLink>
        </li>
        <li class="p-rankingtop__item" data-index="3">
          <NuxtLink to="/dinosaur/t-rex"
            ><img
              class="p-rankingtop__image"
              src="~/assets/images/slide01.png"
              alt=""
          /></NuxtLink>
        </li>
      </ul>
    </section>
    <!-- /恐竜ランキング -->
    <!-- 博物館・公園 -->
    <section class="p-museumtop u-mgb-40">
      <h2 class="c-title c-title--primary c-title--accent u-align-c u-mgb-20">
        恐竜に会いにいく
      </h2>
      <ul class="p-museumtop__list">
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
      </ul>
      <NuxtLink to="/museum" class="c-button c-button--primary"
        >博物館・公園一覧へ</NuxtLink
      >
    </section>
    <!-- /博物館・公園 -->
    <!-- バナー -->
    <NuxtLink to="/" class="c-pc_content--m">
      <img
        class="c-banner__image u-mgb-10"
        src="~/assets/images/top-banner01.png"
        alt=""
        width="415"
        height="140"
    /></NuxtLink>
    <NuxtLink to="/museum" class="c-pc_content--m"
      ><img
        class="c-banner__image"
        src="~/assets/images/top-banner02.png"
        alt=""
        width="415"
        height="140"
    /></NuxtLink>
    <!-- /バナー -->
    <!-- コラム -->
    <section class="p-columntop u-mgb-40">
      <h2 class="c-title c-title--primary c-title--accent u-align-c u-mgb-20">
        コラムを読む
      </h2>
      <ul class="p-columntop__list">
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
        <div class="c-box c-box--column">
          <img
            class="c-box__image c-box__image--column"
            src="~/assets/images/slide02.png"
            alt=""
            width="100"
            height="100"
          />
          <div class="c-box__text c-box__text--column">
            <span class="p-museum__area" data-area="ibaraki">茨城県</span>
            <span class="p-museum__category" data-category="park">公園</span>
            <p>
              恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。
            </p>
          </div>
        </div>
      </ul>
      <NuxtLink to="/column" class="c-button c-button--primary"
        >コラムをもっと読む</NuxtLink
      >
    </section>
    <!-- /コラム -->
  </main>
</template>
