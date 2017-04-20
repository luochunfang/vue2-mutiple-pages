<template>
  <div id="add">
    <img src="../../assets/images/logo.png" alt="">
    i am add
    <a href="javascript:;" class="weui-btn weui-btn_primary">绿色按钮</a>
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

    // loading('loading...')
  }
}
</script>
