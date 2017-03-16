var path = require('path')

const account = {
  queryNextWorkDay: {
    url: '/product/endownment/queryNextWorkDay',
    data: '../data/users.json'
  },
  queryEndowmentSituation: {
    url: '/portal/product/endownment/queryEndowmentSituation',
    data: '../data/queryEndowmentSituation.json'
  }
}

const products = {}
const others = {}

const urls = {}

const apiEndpoints = Object.assign({}, account, products, others)

Object.keys(apiEndpoints).map(name => {
  let url = path.resolve(__dirname, apiEndpoints[name].url)
  urls[name] = url
})

export const routes = apiEndpoints
export const apis = urls