/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-21 10:05:56
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-21 10:06:44
*/

'use strict'

Vue.filter('incrsRateFormatter', (val) => {
  return (Number(val) * 100.toFixed(2))
})