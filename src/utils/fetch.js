/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-03-16 16:28:54
* @Last Modified by:   dlidala
* @Last Modified time: 2017-03-16 16:48:18
*/

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
