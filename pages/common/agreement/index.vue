<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <h2 class="c-subtitle u-mgt-20">利用規約</h2>
    <hr />
    <p class="c-sentence">
      それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。
    </p>
    <p class="c-sentence">
      それはどうも個人へするだように限らて得るたらのですからまたはまた目黒自分忘れでしょまい。ただそう一日も自分が聴いて、元来にはなはだいうでだろと下すから、ないありうてしかしお準備が窮めたた。
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      directories: [
        {
          name: '利用規約',
          path: '/common/agreement/',
        },
      ],
    }
  },
  head() {
    return {
      title: '利用規約',
    }
  },
}
</script>
