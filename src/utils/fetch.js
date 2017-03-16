// ES6 fetch() API 没有timeout, 不能abort 暂时还不满足需求

// project base custom `fetch()`
require('es6-promise').polyfill()
var isomorphicFetch = require('isomorphic-fetch')

export function fetch(url) {

  // setp1: spinner.start()
  // setp2: fetch data
  // setp3: spinner.stop()
  //    -- success (cb)
  //    -- timeout (cb)
  //    -- error   (cb)

  return isomorphicFetch(url, {
    credentials: "same-origin",
    timeout: 100
  })

}

export function save(url) {
  return isomorphicFetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
}
