/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-04-20 14:49:33
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-24 15:48:30
*/

'use strict'

import fetch from 'utils/fetch2'
import url from 'utils/urls'

const posts = {
  getPosts: (opts) => fetch(url.queryNextWorkDay, opts),
  getArticle: (opts) => fetch(url.queryEndowmentSituation, opts)
}

export default posts
