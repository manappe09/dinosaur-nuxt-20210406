<template>
  <main class="l-main">
    <Breadcrumbs />
    <h2 class="c-title c-title--accent u-mgt-40 u-align-c">ログイン</h2>
    <label for="email">メールアドレス</label>
    <input id="email" type="email" /><br />
    <label for="password">パスワード</label>
    <input id="password" type="password" /><br />
    <button class="c-button c-button--primary u-mgt-40 u-mgb-20">
      ログイン
    </button>
    <NuxtLink class="c-linktext u-text-s" to=""
      >登録したメールアドレス・パスワードを忘れた方はこちら</NuxtLink
    >
    <NuxtLink class="c-button c-button--third u-mgt-80" to="/register"
      >新規登録はこちら</NuxtLink
    >
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'ログイン',
    }
  },
}
</script>
