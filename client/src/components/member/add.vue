<template>
  <div class="hello">
    <h1>회원가입 페이지</h1>
    <hr>
    <form action="" method="post" @submit="memberAdd">
       <input type="text" name="id" placeholder="아이디(이메일)" required><br>
       <input type="password" name="pw" placeholder="비밀번호" required><br>
       <input type="text" name="name" placeholder="이름" required><br>
       <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      pw: '',
      name: ''
    }
  },
  methods: {
    memberAdd (e) {
      e.preventDefault()
      const url = 'http://localhost:3000/member/add'
      const frm = e.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id: frm.id.value,
          pw: frm.pw.value,
          name: frm.name.value
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          const cnt = json[0]['count(*)']
          if (cnt > 0) {
            alert('중복된 아이디입니다.')
          } else {
            alert('회원가입이 완료되었습니다.')
            _this.$router.push('/')
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
