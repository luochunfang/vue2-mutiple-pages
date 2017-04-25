/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-24 10:20:08
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-24 17:31:08
*/

'use strict'

/* eslint-disable */

require('./ajaxSettings')()

import { ajax, when } from 'jquery'
import { baseURL } from './constant'
import handleExceptions from './handleExceptions'
import needTokenLists from './needTokenLists'

const fetch = (url, options = {}) => {
  var count = 1

  // if not provide url
  if (!url) {
    throw new Error('URL Not Found!')
    return
  }

  // concat domain
  url = baseURL + url

  var token = false
  // try fetch access token
  if ( needTokenLists.indexOf( url ) > -1) {
    token = true
  }

  return new Promise( function ( resolve, reject ) {
    let obj = ({
      url: url || '',
      type: options.type || 'POST',
      data: options.data || {},
      dataType: options.dataType || 'json',
      error: ( xhr, statusText, errorThrown ) => {
        console.error(`
          Request: ${ statusText } ==> Error Type: ${ errorThrown }
        `)

        reject(xhr)
      },
      success: ( data, textStatus, xhr ) => {
        // try to handle exceptions
        try {
          handleExceptions( data.resCode )
        } catch ( err ) {
          // console.log(err)
        }

        // business logic fail(not really)
        if ( data.resCode !== '000000' ) {
          reject(data)
          return
        }

        resolve( data )
      }
    })

    if (needTokenLists.indexOf(url) > -1) {
      debugger
      let dd = ajax('/portal/product/endownment/defineRepeatSubmit')
      console.log(dd)
      when(ajax('/portal/product/endownment/defineRepeatSubmit')).done(function(res) {
        debugger
        console.log(obj.url)
        ajax(url, obj)
      })
    } else {
      ajax( url, obj )
    }
  })
}

export default fetch
