/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-17 14:56:00
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-21 15:16:59
*/

/* eslint-disable */
'use strict'

import {
  isEmpty as _isEmpty,
  each as _each,
  extend as _extend
} from 'lodash'

import { when as _when } from 'jquery'

export let utils = {
  getAppInfo() {
    let ua = window.navigator.userAgent + ''
    let info = /AladdinHybrid\/(\d+\.\d+\.?\d*.*?) \((.*?) (\d+\.\d+\.?\d*.*?)\)/i.exec(ua) || ''
    let appInfo = {
      hybridVersion: info[1] || '',
      appName: info[2] || '',
      appVersion: info[3] || ''
    }

    return appInfo
  },

  isKDAPP2() {
    let channel = this.getParam( 'accessChannel' ) || ''
    let isKDV2 = !!window.navigator.userAgent.toLowerCase().match( 'paebank' )

    if ( isKDV2 || channel === 'wy01' || channel === 'wy03') {
      return true
    }

    return false
  },

  isKDAPP3() {
    let isKD = this.isKDAPP()
    let version = this.getAppInfo().appVersion

    return ( isKD && ( version >= '3.0.0' ) ) ? true : false
  },

  isKDAPP() {
    return !!window.navigator.userAgent.toLowerCase().match( 'paebank' )
  },

  getParam( paramName ) {
    let regExp = new RegExp( '\\b' + paramName + '=([^&=]+)' )
    let matched = window.location.search.match( regExp )

    return matched ? matched[1] : ''
  },

  getParams() {
    let search = window.location.search,
        queryString = search.substr( search.lastIndexOf( '?' ) + 1 ),
        arr = queryString.split( '&' )

    return arr.reduce( ( result, item ) => {
      let t = item.split( '=' )
      result[t[0]] = t[1]

      return result
    }, {} )
  },

  isEmpty( value ) {
    return _isEmpty( value )
  },

  each( collection, iteratee ) {
    return _each( collection, iteratee )
  },

  extend( object, sources ) {
    return _extend( object, sources )
  },

  when( singleValue ) {
    return _when( singleValue )
  }
}

window.utils = utils
