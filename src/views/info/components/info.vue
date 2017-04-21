<template>
  <div class="info">
    <h1>{{ msg }}</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import API from '../../../api'

export default {
  name: 'info',
  data () {
    return {
      msg: 'this is info page, testing',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem perspiciatis, voluptas sapiente eligendi eius harum vero possimus et repellat ab quidem enim quod voluptatibus aliquid autem quos quasi eveniet iusto!'
    }
  },

  created () {
    API.getPosts().then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
  /*background: url(../assets/images/test.png);*/
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
