/* eslint-disable */

require('./ajaxSettings')()

import { Deferred, ajax, when } from 'jquery'
import handleExceptions from './handleExceptions'
import { baseURL } from './constant'
import needTokenLists from './needTokenLists'
import { fetchToken } from './requestToken'
console.log(needTokenLists)

const fetch = (url, options = {}) => {
  debugger

  // if not provide url
  if (!url) {
    console.error(
      `URL Not Found!`
    )

    return
  }

  // inject token
  // if ( needTokenLists.indexOf( url ) > -1 ) {
  //   when( fetchToken() ).then( (res) => {
  //     ajax(url, obj)
  //   })
  // } else {
  //   ajax(url, obj)
  // }

  // concat domain
  url = baseURL + url

  let deferred = new Deferred()
  var obj = {
    url: url || '',
    type: options.type || 'POST',
    data: options.data || {},
    dataType: options.dataType || 'json',
    error: (xhr, statusText, errorThrown) => {
      deferred.reject(xhr)

      console.error(`
        Request: ${statusText} ==> Error Type: ${errorThrown}
      `)
    },
    success: (data, textStatus, xhr) => {
      // try to handle exceptions
      try {
        handleExceptions(data.resCode)
      } catch (err) {
        // console.log(err)
      }

      // business logic fail(not really)
      if (data.resCode !== '000000') {
        deferred.reject(data)
        return
      }

      ajax(url, obj)

      deferred.resolve(data)
    }
  }

  return deferred.promise()
}

export default fetch

window.fetch = fetch
