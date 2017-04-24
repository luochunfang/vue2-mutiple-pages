/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-18 14:08:18
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-21 09:51:23
*/

'use strict'

import Vue from 'vue'
import posts from './api/posts'
// import bow from 'bow'
// window.bow = bow

import { utils } from 'utils/utils'
console.log(utils)

import { encryptPayPassword, encryptLoginPassword } from 'services/encrypt'
new Vue({
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellat et fugiat deserunt! Blanditiis saepe possimus itaque at facere dignissimos earum officiis suscipit porro! Eos accusamus quam necessitatibus maxime voluptas!'
    }
  },

  methods: {
    loadData () {
      posts.getArticle().then(res => {
        // 000001
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })

      console.log('pay password: ' + encryptPayPassword('test'))
      console.log('login password: ' + encryptLoginPassword('test'))
    }
  }
}).$mount('#login')
