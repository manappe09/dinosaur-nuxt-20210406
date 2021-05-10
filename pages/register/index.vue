<template>
  <main class="l-main">
    <Breadcrumbs :directories="directories" />
    <h2 class="c-title c-title--accent u-mgt-40 u-align-c">新規登録</h2>
    <label for="nickname">ニックネーム</label>
    <input type="text" id="nickname" /><br />
    <label for="email">メールアドレス</label>
    <input type="email" id="email" /><br />
    <label for="password">パスワード</label>
    <input type="password" id="password" /><br />
    <button class="c-button c-button--primary u-mgt-40 u-mgb-20">登録</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      directories: [
        {
          name: '新規登録',
          path: '/register',
        },
      ],
    }
  },
  head() {
    return {
      title: '新規登録',
    }
  },
}
</script>
