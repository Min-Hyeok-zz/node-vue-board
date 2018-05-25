<template>
  <div id="app">
    <img src="./assets/logo.png">
      <router-link to="/">홈</router-link>
      <router-link to="/Test">테스트 링크</router-link>
      <router-link to="/board/list">게시판</router-link>
      <div v-if="member[0] != null">
        <button @click="logout">로그아웃</button>
      </div>
      <div v-else>
        <router-link to="/member/add">회원가입</router-link>
        <router-link to="/member/login">로그인</router-link>
      </div>
    <p>{{member[0]}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  member: {},
  data () {
    return {
      member: this.$store.state.member
    }
  },
  methods: {
    logout (e) {
      this.$store.commit('logout')
      alert('로그아웃 되었습니다.')
      this.$router.push('/')
    }
  }
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
