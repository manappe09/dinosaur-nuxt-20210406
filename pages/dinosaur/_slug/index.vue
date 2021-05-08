<template>
  <main class="l-main">
    <Breadcrumbs />
    <div>
      <div class="p-dinosaur__slide">
        <img
          class="p-dinosaur__eyecatch"
          :src="image.url"
          alt=""
          width="100"
          height="200"
        />
        <div class="p-dinosaur__accent" role="none"></div>
      </div>
      <h2 class="c-subtitle">{{ name }}</h2>
      <ul class="c-profile">
        <li class="c-profile__item">{{ $setDinosaurAge(age[0]) }}</li>
        <li class="c-profile__item">{{ $setDinosaurCategory(category[0]) }}</li>
      </ul>
    </div>
    <div v-html="text"></div>
    <div class="p-ralated u-mgt-80">
      <h3 class="u-align-c u-mgb-10">ほかの恐竜を見る</h3>
      <ul class="p-related__list">
        <li class="p-related__item c-box c-box--row">
          <NuxtLink to="">
            <img
              class="c-box__image"
              src="~/assets/images/slide02.png"
              alt=""
            />
            <p>ステゴサウルス</p>
          </NuxtLink>
        </li>
        <li class="p-related__item c-box c-box--row">
          <NuxtLink to="">
            <img
              class="c-box__image"
              src="~/assets/images/slide02.png"
              alt=""
            />
            <p>トリケラトプス</p>
          </NuxtLink>
        </li>
        <li class="p-related__item c-box c-box--row">
          <NuxtLink to="">
            <img
              class="c-box__image"
              src="~/assets/images/slide02.png"
              alt=""
            />
            <p>ユタラプトル</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink
      to="/dinosaur"
      class="c-button c-button--secondary u-mgt-80 u-mgb-80"
      >＜&nbsp;恐竜のなかまたちへ戻る</NuxtLink
    >
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      const data = await $axios.$get(`dinosaur/${params.slug}`)
      return data
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      eyecatch: {
        imageSrc: 'slide02',
      },
      dinosaurArea: {
        data: 'chiba ',
        name: '千葉県',
      },
      dinosaurCategory: {
        data: 'museum',
        name: '博物館',
      },
      name: 'ティラノサウルス',
    }
  },
  head() {
    return {
      title: `${this.title}`,
    }
  },
}
</script>
