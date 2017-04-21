/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-18 12:32:14
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-21 15:48:04
*/

'use strict'

const account = {
  queryNextWorkDay: '/product/endownment/queryNextWorkDay',
  queryEndowmentSituation: '/portal/product/endownment/queryEndowmentSituation',
  defineRepeatSubmit: '/portal/product/endownment/defineRepeatSubmit'
}

const products = {}
const others = {}

module.exports = Object.assign({}, account, products, others)

