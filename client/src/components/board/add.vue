<template>
  <div class="hello">
    <h1>글 작성 페이지</h1>
    <hr>
    <form action="" method="post" @submit="boardAdd">
       <input type="text" name="writer" placeholder="작성자" :value="writer" readonly><br>
       <input type="text" name="subject" placeholder="글제목" :value="subject"><br>
       <textarea name="content" cols="30" rows="10" placeholder="글내용" v-html="content" /><br>
       <button type="submit">글작성</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      writer: this.$store.state.member[0]['name'],
      subject: '',
      content: ''
    }
  },
  created () {
    if (!this.$store.state.isMember) {
      alert('로그인 후 이용 해 주세요')
      this.$router.go(-1)
    }
  },
  methods: {
    boardAdd (event) {
      event.preventDefault()
      const url = 'http://localhost:3000/board/add'
      const frm = event.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          writer: frm.writer.value,
          subject: frm.subject.value,
          content: frm.content.value
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          alert('게시글이 추가되었습니다')
          _this.$router.push(`./view/${json.insertId}`)
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
