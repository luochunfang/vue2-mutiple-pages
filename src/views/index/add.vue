<template>
  <div id="add">
    <img src="../../assets/images/logo.png" alt="">
    i am add
  </div>
</template>

<script>
import API from '../../api'

export default {
  name: 'add',
  created () {
    API.getPosts().then(res => {
      console.log(res)
    })
  }
}
</script>
