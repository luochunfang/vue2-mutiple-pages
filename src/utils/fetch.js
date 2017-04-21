/* eslint-disable */

require('./ajaxSettings')()

import { Deferred, ajax } from 'jquery'
import handleExceptions from './handleExceptions'
import { baseURL } from './constant'

const fetch = (url, options = {}) => {

  // if not provide url
  if (!url) {
    console.error(
      `URL Not Found!`
    )

    return
  }

  // concat domain
  url = baseURL + url

  let deferred = new Deferred()
  let obj = {
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

      deferred.resolve(data)
    }
  }

  ajax(url, obj)

  return deferred.promise()
}

export default fetch

window.fetch = fetch
