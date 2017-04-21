var path = require('path')

const account = {
  '/product/endownment/queryNextWorkDay': '../data/queryNextWorkDay.json',
  '/portal/product/endownment/queryEndowmentSituation': '../data/queryEndowmentSituation.json',
  '/portal/product/endownment/defineRepeatSubmit': '../data/defineRepeatSubmit.json'
}

const products = {}
const others = {}

module.exports = Object.assign({}, account, products, others)


