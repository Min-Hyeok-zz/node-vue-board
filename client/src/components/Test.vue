<template>
  <div class="hello">
    <h1>{{ name }}</h1>
    <p>
       <a href="#" @click="testMethod">클릭해봐</a>
       <input type="text" id="testName" :value="name">
    </p>
  </div>
</template>

<script>
export default {
  name: 'Test',
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
        console.log(json)
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
