<template>
  <div class="hello">
    <h1>글 보기 페이지</h1>
    <hr>
    <template v-if="view != null">
        <h3>제목 : {{view.subject}}</h3>
        <p>작성자 : {{view.writer}}</p>
        <p>작성일 : {{view.date}}</p>
        <p>내용 : {{view.content}}</p>
        <p>조회수 : {{view.hit}}</p>
      <div>
          <router-link tag="button" type="button" to="../list">목록</router-link>
          <router-link tag="button" type="button" :to="`/board/update/${view.idx}`">수정</router-link>
          <form action="" method="post" @submit="boardDelete">
            <input type="hidden" name="idx" v-model="view.idx">
            <button type="submit">삭제</button>
          </form>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BoardList',
  data () {
    return {
      view: null
    }
  },
  created () {
    const _this = this
    fetch(`http://localhost:3000/board/view/${_this.$route.params.idx}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        if (json.length) {
          _this.view = json[0]
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    boardDelete (e) {
      e.preventDefault()
      const url = 'http://localhost:3000/board/delete'
      const frm = e.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          idx: frm.idx.value
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          alert('게시글이 삭제되었습니다.')
          _this.$router.push(`/board/list`)
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
