<template>
  <main class="l-main">
    <Breadcrumbs />
    <MuseumContents />
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
      data: {
        eyecatch: {
          imageSrc: 'slide02',
        },
        museumArea: {
          data: 'ibaraki',
          name: '茨城県',
        },
        museumCategory: {
          data: 'park',
          name: '公園',
        },
        subtitle:
          '恐竜の大きな看板がお出迎え。休日は家族で賑わう広々とした公園です。',
      },
    }
  },
}
</script>
