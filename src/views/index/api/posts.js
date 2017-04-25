/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-20 14:49:33
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-25 10:31:37
*/

'use strict'

import fetch from 'utils/fetch'
import url from 'utils/urls'

const posts = {
  getPosts: (opts) => fetch(url.queryNextWorkDay, opts),
  getArticle: (opts) => fetch(url.queryEndowmentSituation, opts)
}

export default posts
