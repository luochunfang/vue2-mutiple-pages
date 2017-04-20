/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-03-16 16:27:59
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-18 09:26:31
*/

import { fetch, save } from '../utils/fetch'
import { baseURL } from '../utils/constant'

const products = {
  // fetchProduct().then()
  // fetchProduct: function() {
  //   return fetch(`${baseURL}/portal/product/endownment/queryEndowmentSituation`)
  // },

  fetchProduct: () => {
    fetch()
  },
  // getPrdInfo: opts => fetch()
}

export default products