<template>
  <div class="hello">
    <h1>게시글 목록</h1>
    <router-link to="./add">글작성</router-link>
    <ul v-if="this.list.length > 0">
        <li v-for="data in list" :key="data.idx">
            {{data.idx}} /
            <router-link :to="`./view/${data.idx}`">{{data.subject}}</router-link> /
            {{data.writer}} /
            {{data.date}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BoardList',
  data () {
    return {
      list: []
    }
  },
  computed: {
    name: function () {
      return this.$store.state.name
    }
  },
  created () {
    fetch('http://127.0.0.1:3000/board')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.list = json
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    testMethod () {
      this.$store.commit('nameSet', document.getElementById('testName').value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
