<template>
  <div class="hello">
    <h1>글 보기 페이지</h1>
    <hr>
    <template v-if="view != null">
        <h3>제목 : {{view.subject}}</h3>
        <p>작성자 : {{view.writer}}</p>
        <p>작성일 : {{view.date}}</p>
        <p>내용 : {{view.content}}</p>
      <div>
          <router-link tag="button" type="button" to="../list">목록</router-link>
          <router-link tag="button" type="button" :to="`./update/${view.idx}`">수정</router-link>
          <button type="button" @click="boardDelete">삭제</button>
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
    fetch(`http://127.0.0.1:3000/board/view/${_this.$route.params.idx}`)
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
    boardDelete (event) {
      alert('test')
      event.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
