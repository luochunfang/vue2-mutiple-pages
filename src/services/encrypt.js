/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-18 15:39:31
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-19 11:09:25
*/

'use strict'

import { payKey, loginKey } from '../utils/constant'
import RSA from '../utils/rsa'
import bow from 'aladdin-ibank/dist/aladdin.ibank.web.min'
window.bow = bow

// import bow from 'bow/dist/bow.min'
// import aladdin from 'aladdin/aladdin.web.min'
// window.aladdin = aladdin

/**
 * 购买交易密码加密
 * @param  {string} password 要加密的明文
 * @return {string}          加密之后的密文
 */
export const encryptPayPassword = (password) => _encrypt(payKey, password)

/**
 * 登录密码加密
 * @param  {string} password 要加密的明文
 * @return {string}          加密之后的密文
 */
export const encryptLoginPassword = (password) => {
  return _encrypt(loginKey, password)
}

/**
 * RSA加密
 * @param  {string} key      加密key
 * @param  {string} password 要加密的明文
 * @return {string}          加密之后的密文
 */
const _encrypt = (key, password) => {
  let rsa = new RSA()
  rsa.setPublic(key, '10001')
  return rsa.encrypt(password)
}

// const _encrypt = (key, password) => {
//   let res

//   bow.crypto.encryptSync({
//     mode: 'RSA',
//     source: password,
//     params: {
//       secretKeyN: key,
//       secretKeyE: '10001',
//       format: '16'
//     }
//   }, (err, result) => {
//     console.log(err, result)
//     res = result
//   })

//   return res
// }

// window.encrypt = _encrypt

