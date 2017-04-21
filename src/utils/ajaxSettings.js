/* eslint-disable */
/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-17 17:07:25
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-20 16:53:17
*/

'use strict'

import { ajax, ajaxSettings } from 'jquery'
import { loading } from 'weui.js'
import { extend as _extend } from 'lodash'

export default () => {
  let Loading

  let settings = _extend(ajaxSettings, {
    cache: true,
    timeout: 20000,
    dataType: 'json',
    type: 'POST',
    xhrFields: { withCredentials: true },
    crossDomain: true,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  })

  ajaxSettings.beforeSend = function (xhr, settings) {
    Loading = loading('loading')
    console.log(settings)
  }

  ajaxSettings.dataFilter = (data, dataType) => {
    let parsedData = {}

    try {
      data = JSON.parse(data)
    } catch (err) {
      console.warn('Response are not a JSON object!')
      return
    }

    if (data.responseCode) {
      parsedData.resCode = data.responseCode
    }

    if (data.responseMsg) {
      parsedData.resMsg = data.responseMsg
    }

    return JSON.stringify(_extend(parsedData, data.data ? data.data : {}))
  }

  // if you use error in $.ajax() this function will not be trigger
  // ajaxSettings.error = function (xhr, textStatus, errorThrown) {
  //   // logs error message
  //   console.log(`request error: ` + errorThrown)
  // }

  // if you use success in $.ajax() this function will not be trigger
  // ajaxSettings.success = function (data, textStatus, xhr) {
  //   console.log(data, textStatus, xhr)
  //   try {
  //     handleExceptions(data.statusCode)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  ajaxSettings.complete = function (xhr, statusText) {
    Loading.hide()
  }
}
