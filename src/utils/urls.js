/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-18 12:32:14
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-18 12:40:41
*/

'use strict'

const account = {
  queryNextWorkDay: '/product/endownment/queryNextWorkDay',
  queryEndowmentSituation: '/portal/product/endownment/queryEndowmentSituation'
}

const products = {}
const others = {}

module.exports = Object.assign({}, account, products, others)

