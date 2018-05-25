<template>
  <div class="hello">
    <h1>로그인 페이지</h1>
    <hr>
    <form action="" method="post" @submit="memberLogin">
       <input type="text" name="id" placeholder="아이디(이메일)" required><br>
       <input type="password" name="pw" placeholder="비밀번호" required><br>
       <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      pw: ''
    }
  },
  created () {
    if (this.$store.state.isMember) {
      alert('이미 로그인 하셨습니다')
      this.$router.go(-1)
    }
  },
  methods: {
    memberLogin (e) {
      e.preventDefault()
      const url = 'http://localhost:3000/member/login'
      const frm = e.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id: frm.id.value,
          pw: frm.pw.value
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json) {
            alert('로그인 되었습니다.')
            _this.$store.commit('login', json)
            _this.$router.push('/')
          } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
