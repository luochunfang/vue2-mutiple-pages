/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-24 10:20:08
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-25 10:19:29
*/

'use strict'

require('./ajaxSettings')()

import { ajax } from 'jquery'
import { baseURL } from './constant'
import handleExceptions from './handleExceptions'
import needTokenLists from './needTokenLists'
import { accessToken } from 'utils/urls'

const fetch = (url, options = {}) => {
  return new Promise(function (resolve, reject) {
    let requireAccessToken = needTokenLists.indexOf(url) > -1 !== false

    // if not provide url
    if (!url) {
      throw new Error(`

        Asshole!!! URL Not Found!
      `)
    }

    // concat domain
    url = baseURL + url

    let obj = ({
      url: url || '',
      type: options.type || 'POST',
      data: options.data || {},
      dataType: options.dataType || 'json',
      error: (xhr, statusText, errorThrown) => {
        console.error(`
          Request: ${statusText} ==> Error Type: ${errorThrown}
        `)

        reject(xhr)
      },
      success: (data, textStatus, xhr) => {
        // try to handle exceptions
        try {
          handleExceptions(data.resCode)
        } catch (err) {
          throw err
        }

        // business logic fail(not really)
        if (data.resCode !== '000000') {
          reject(data)

          return
        }

        resolve(data)
      }
    })

    // inject access token
    if (requireAccessToken) {
      fetch(accessToken).then(res => {
        obj.data.token = res.tokenValue

        ajax(url, obj)
      })
    } else {
      ajax(url, obj)
    }
  })
}

export default fetch
window.fetch = fetch
