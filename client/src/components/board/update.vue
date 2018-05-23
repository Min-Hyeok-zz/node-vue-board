<template>
  <div class="hello">
    <h1>글 수정 페이지</h1>
    <hr>
    <template v-if="update != null">
      <form action="/board/update" method="post" @submit="boardUpdate">
        <input type="hidden" name="idx" v-model="update.idx">
        <input type="text" name="writer" v-model="update.writer" required><br>
        <input type="text" name="subject" v-model="update.subject" required><br>
        <textarea name="content" cols="30" rows="10" v-model="update.content" required></textarea><br>
        <button type="submit">글수정</button>
      </form>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BoardUpdate',
  data () {
    return {
      update: null,
      writer: '',
      subject: '',
      content: '',
      idx: ''
    }
  },
  created () {
    const _this = this
    fetch(`http://127.0.0.1:3000/board/update/${_this.$route.params.idx}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        if (json.length) {
          _this.update = json[0]
        }
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        alert('글이 수정되었습니다.')
        _this.$router.push(`./view/${_this.$route.params.idx}`)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    boardUpdate (e) {
      e.preventDefault()
      const url = 'http://localhost:3000/board/update'
      const frm = e.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          writer: frm.writer.value,
          subject: frm.subject.value,
          content: frm.content.value,
          idx: frm.idx.value
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          alert('게시글이 수정되었습니다.')
          _this.$router.push(`/board/view/${_this.$route.params.idx}`)
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
