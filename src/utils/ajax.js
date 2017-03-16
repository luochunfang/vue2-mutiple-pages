// https://github.com/mzabriskie/axios
import axios from 'axios'
import _ from 'lodash'

import 'mint-ui/lib/style.css'
import { Indicator as spinner, Toast } from 'mint-ui'

import { baseURL } from './constant'

// global settings
axios.defaults.type = 'POST'
axios.defaults.timeout = 35000
axios.defaults.withCredentials = false
axios.defaults.baseURL = baseURL

// handle timeout error
const handleTimeoutError = function (err) {
  if (!err.response && err.stack.indexOf('timeout') > 0) {
    Toast('请求超时，请稍后再试')
  }
}

// handle connection error
const handleConnectionError = function (err) {
  if (!err.response && err.stack.indexOf('Network Error') > 0) {
    Toast('网络出错，请稍后再试')
  }
}

// handle exceptions
// const handleExceptions = function (code) {
//   console.log(code)
// }

// parse response data, fixed the suck backend API design
// const parseResponse = (response) => {
//   return _.extend(response.data.data, {
//     resMsg: response.data.responseMsg,
//     resCode: response.data.responseCode
//   })
// }

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  spinner.open()
  return config
}, function (error) {
  // Do something with request error
  spinner.close()
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data

  // spinner.close()
  setTimeout(() => {
    spinner.close()
  }, 2000)

  // handle exceptions
  /**
   * 291001, 291002, 291003, 291004, 291005, 291006, 291007, 291008, 291009
   */
  // if (response && responseCode) {}

  return response
  // return parseResponse(response)
}, function (error) {
  // Do something with response error
  spinner.close()
  handleTimeoutError(error)
  handleConnectionError(error)
  return Promise.reject(error)
})

export function fetch (url) {
  return axios.get(url)
}

export function save (url, options = {}) {
  let settings = _.extend({
    type: 'POST'
  }, options)
  return axios.post(url, settings)
}
