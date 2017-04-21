/*
* @Author: dlidala
* @Github: https://github.com/dlidala
* @Date:   2017-03-16 16:27:53
* @Last Modified by:   dlidala
* @Last Modified time: 2017-04-21 10:08:08
*/

'use strict'

import fetch from '../utils/fetch'
import url from '../utils/urls'

const posts = {
  getPosts: (opts) => fetch(url.queryNextWorkDay, opts),
  getArticle: (opts) => fetch(url.queryEndowmentSituation, opts)
}

export default posts

