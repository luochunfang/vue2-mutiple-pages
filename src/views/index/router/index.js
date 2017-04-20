/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-20 15:11:31
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-20 15:11:36
*/

'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
