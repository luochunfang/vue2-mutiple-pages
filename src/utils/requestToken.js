/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-21 17:19:15
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-21 17:25:13
*/

/* eslint-disable */
'use strict'

import fetch from './fetch'

// step1 if need access token
// step2 fetch the token
// step3 attach to request body
// step4 and then start request

export const fetchToken = () => {
  fetch('/portal/product/endownment/defineRepeatSubmit', { data: { defineTypeName: 'token' } })
      .then( function( res ) {
        debugger
        console.log(res)
        return res
      }, function( err, xhr ) {
        debugger
        console.log(err, xhr)
      })

}
// let fetchToken = () => {
//   console.log(this)
// }

// if ( needTokenLists.indexOf( url ) > -1 ) {
//   when( fetchToken() ).then( ajax( url, obj ) )
// } else {
//   ajax(url, obj)
// }
