var path = require('path')

const account = {
  queryNextWorkDay: {
    url: '/product/endownment/queryNextWorkDay',
    data: '../data/queryNextWorkDay.json'
  },
  queryEndowmentSituation: {
    url: '/portal/product/endownment/queryEndowmentSituation',
    data: '../data/queryEndowmentSituation.json'
  }
}

const products = {}
const others = {}

module.exports = Object.assign({}, account, products, others)

// fetch(api.queryEndwmentSituation.url)
// fetch(api.queryEndwmentSituation)
// const urls = {}
// Object.keys(module.exports).map(name => {
//   let url = path.resolve(__dirname, module.exports[name].url)
//   urls[name] = url
// })
