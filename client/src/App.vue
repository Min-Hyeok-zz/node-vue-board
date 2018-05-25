<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">홈</router-link>
      <router-link to="/Test">테스트 링크</router-link>
      <router-link to="/board/list">게시판</router-link>
      <router-link to="/member/add">회원가입</router-link>
      <router-link to="/member/login">로그인</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
