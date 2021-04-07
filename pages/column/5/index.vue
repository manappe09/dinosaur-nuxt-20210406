<template>
  <main class="l-main">
    <Breadcrumbs />
    <ColumnContents />
    <p class="c-sentence">
      それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。
    </p>
    <p class="c-sentence">
      それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。
    </p>
    <NuxtLink
      to="/museum"
      class="c-button c-button--secondary u-mgt-80 u-mgb-80"
      >＜&nbsp;博物館・公園一覧へ戻る</NuxtLink
    >
  </main>
</template>

<script>
export default {
  data() {
    return {
      eyecatch: {
        imageSrc: 'slide02',
      },
      columnCategory: {
        data: 'dinosaur',
        name: '恐竜のこと',
      },
      subtitle: '知ってた？トリケラトプスのヒミツ？！',
    }
  },
}
</script>
