<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <h2 class="c-subtitle u-mgt-10">このサイトについて</h2>
    <hr />
    <p class="c-sentence">
      それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。
    </p>
    <p class="c-sentence">
      それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。
    </p>
    <Button
      :linkto="'guide'"
      :level="'secondary'"
      :label="'＜ ご利用ガイド一覧へ戻る'"
      class="u-mgt-80 u-mgb-80"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      directories: [
        {
          name: 'このサイトについて',
          path: '/website',
        },
      ],
    }
  },
  head() {
    return {
      title: 'このサイトについて',
    }
  },
}
</script>
